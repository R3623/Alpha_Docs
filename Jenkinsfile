pipeline {
    agent any

    environment {
        DOMAIN = "insi.local"
    }

    stages {

        stage('Init variables') {
            steps {
                script {
                    // Extrait le nom du repo depuis l'URL git
                    def repo = env.GIT_URL
                        .tokenize('/')
                        .last()
                        .replace('.git', '')

                    env.TEAM_NAME = repo.toLowerCase()

                    echo "TEAM_NAME = ${env.TEAM_NAME}"
                }
            }
        }

        stage('Checkout') {
            steps {
                checkout scm
                echo "✅ Code récupéré"
            }
        }

        stage('Vérification Docker') {
            steps {
                sh '''
                    set -e
                    docker --version
                    docker compose version
                '''
            }
        }

        stage('Génération Traefik (auto)') {
            steps {
                sh '''
                    set -e
                    echo "⚙️ Génération config Traefik (HTTP)..."

                    echo "TEAM_NAME=${TEAM_NAME}"
                    echo "DOMAIN=${DOMAIN}"

                    cat <<EOF > docker-compose.traefik.yml
services:
  web:
    labels:
      - "traefik.enable=true"
      - "traefik.http.routers.${TEAM_NAME}.rule=Host(\\`${TEAM_NAME}.${DOMAIN}\\`)"
      - "traefik.http.routers.${TEAM_NAME}.entrypoints=web"
      - "traefik.http.services.${TEAM_NAME}.loadbalancer.server.port=3000"
    networks:
      - traefik-network

networks:
  traefik-network:
    external: true
EOF

                    echo "📄 Contenu docker-compose.traefik.yml"
                    cat docker-compose.traefik.yml
                '''
            }
        }

        stage('Déploiement') {
            steps {
                sh '''
                    set -e

                    echo "🛑 Arrêt anciens conteneurs..."
                    docker compose down -v || true

                    echo "🔨 Build..."
                    docker compose \
                      -f docker-compose.yml \
                      -f docker-compose.traefik.yml \
                      build --no-cache

                    echo "🚀 Démarrage..."
                    docker compose \
                      -f docker-compose.yml \
                      -f docker-compose.traefik.yml \
                      up -d

                    sleep 10
                    docker compose ps
                '''
            }
        }

        stage('Healthcheck') {
            steps {
                sh '''
                    echo "❤️ Vérification santé..."
                    docker compose ps
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Déploiement réussi → http://${TEAM_NAME}.${DOMAIN}"
        }
        failure {
            echo "❌ Échec du déploiement"
            sh 'docker compose logs || true'
        }
        always {
            echo "🏁 Pipeline terminé"
        }
    }
}
