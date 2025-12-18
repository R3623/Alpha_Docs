import React, { Component } from 'react'
import '../Assets/Accueil.scss'
import { MdCall, MdEmail } from 'react-icons/md'
import { BsFacebook, BsFileCodeFill, BsInstagram, BsLinkedin, BsMessenger, BsRobot, BsWhatsapp } from 'react-icons/bs'

export class AccueilPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="bg">
          <div className="left"></div>
          <div className="center">
            <p>Bienvenue sur AlphaDocs</p>
            <h1>VOTRE SOURCE FIABLE D'INFORMATIONS TECHNOLOGIQUES VÉRIFIÉES</h1>
            <div className="contact">
              <div className="appel">
                <MdCall className="iconCall" />
                <div className="txt">
                  <p>Appelez</p>
                  <span>+261 38 80 542 84</span>
                </div>
              </div>
              <div className="mail">
                <MdEmail className="iconMail" />
                <div className="txt">
                  <p>E-mail</p>
                  <span>bugslayers.codeur@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bgHero">
            <div className="saryBg"></div>
            <div className="saryHero"></div>
          </div>
          <div className="right"></div>
        </div>

        <div className="content">
          <div className="about">
            <div className="aboutContent">
              <div className="sary"></div>
              <div className="aboutTxt">
                <div className="titre">
                  <p className="title">À propos de nous</p>
                  <h3>Pourquoi nous choisir ?</h3>
                </div>
                <span>
                  Dans un monde numérique saturé de désinformation et de contenus promotionnels déguisés en conseils techniques,
                  AlphaDocs se distingue comme votre plateforme de confiance. Nous centralisons uniquement des informations
                  provenant de sources officielles et de créateurs certifiés qui collaborent directement avec les documentations
                  officielles des technologies. Notre mission : vous aider à comprendre réellement  comment choisir et pourquoi on choisit un technologie par rapport à votre but ou de votre projet.
                </span>
                <div className="cadres">
                  <div className="cadre">
                    <BsFileCodeFill />
                    <h3>Docs officiels</h3>
                    <p>Centraliser</p>
                  </div>
                  <div className="cadre">
                    <BsRobot />
                    <h3>AI</h3>
                    <p>Filtration des contenu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about_call">
              <div className="call">
                <MdCall className="callI" />
                <div className="number">
                  <span>Appelez-nous directement</span>
                  <p>+261 38 80 542 84</p>
                </div>
              </div>
              <div className="btn_read">
                <p>EN SAVOIR PLUS</p>
              </div>
            </div>
          </div>

          <div className="services">
            <div className="titre">
              <p className="title">Nos Services</p>
              <h3>Découvrez comment nous combattons la désinformation</h3>
            </div>
            <div className="contentS">
              <div className="cadreS">
                <div className="cadre">
                  <div style={{ padding: '30px' }}>
                    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'rgb(2, 56, 68)' }}>
                      🔍 Recherche Intelligente Alimentée par IA
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(0,0,0,0.75)' }}>
                      Notre moteur de recherche intelligent, propulsé par l'intelligence artificielle, analyse et filtre
                      les informations pour vous présenter uniquement du contenu vérifié provenant de documentations officielles.
                      Trouvez rapidement des réponses fiables à vos questions techniques sans perdre de temps sur des contenus
                      biaisés ou promotionnels.
                    </p>
                  </div>
                </div>
                <div className="cadre">
                  <div style={{ padding: '30px' }}>
                    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'rgb(2, 56, 68)' }}>
                      📚 Centralisation de Documentation Officielle
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(0,0,0,0.75)' }}>
                      Accédez à une base de données centralisée regroupant les documentations officielles de toutes les
                      technologies majeures. Plus besoin de naviguer entre dizaines de sites : nous rassemblons React,
                      Vue, Angular, Python, Node.js et bien d'autres en un seul endroit sécurisé et vérifié.
                    </p>
                  </div>
                </div>
              </div>
              <div className="cadreS">
                <div className="cadre">
                  <div style={{ padding: '30px' }}>
                    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'rgb(2, 56, 68)' }}>
                      ✅ Vidéos et Contenus Certifiés
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(0,0,0,0.75)' }}>
                      Nous sélectionnons uniquement des vidéos et tutoriels de créateurs certifiés qui collaborent avec
                      les équipes officielles des technologies. Fini les tutoriels YouTube trompeurs qui ne font que
                      promouvoir des produits : profitez de contenus pédagogiques authentiques et objectifs.
                    </p>
                  </div>
                </div>
                <div className="cadre">
                  <div style={{ padding: '30px' }}>
                    <h3 style={{ fontSize: '22px', marginBottom: '15px', color: 'rgb(2, 56, 68)' }}>
                      🎯 Guides de Décision Technologique
                    </h3>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', color: 'rgba(0,0,0,0.75)' }}>
                      Recevez des comparaisons objectives et des guides détaillés pour choisir la bonne technologie selon
                      votre projet. Nos analyses se basent sur des critères techniques réels, les cas d'usage officiels,
                      et les recommandations des créateurs de chaque technologie, pas sur des opinions subjectives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contactSection">
            <div className="contact_detail">
              <h3>Détails du contact</h3>
              <p style={{ fontSize: '16px', lineHeight: '1.7', color: 'rgba(0,0,0,0.7)' }}>
                Vous avez des questions sur une technologie spécifique ? Vous souhaitez en savoir plus sur notre processus
                de vérification ? Notre équipe d'experts est disponible pour vous accompagner dans votre recherche d'informations
                fiables. Contactez-nous et découvrez comment TechVeritas peut transformer votre apprentissage technologique.
              </p>
              <div className="block_contact">
                <div className="bl">
                  <div className="block">
                    <BsFacebook />
                    <p>Facebook</p>
                  </div>
                  <div className="block">
                    <BsInstagram />
                    <p>Instagram</p>
                  </div>
                </div>
                <div className="bl">
                  <div className="block">
                    <BsLinkedin />
                    <p>Linkedin</p>
                  </div>
                  <div className="block">
                    <BsWhatsapp />
                    <p>WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cotact_from">
              <h3>Contactez-nous</h3>
              <div className="user_info">
                <input type="text" placeholder="Nom complet" />
                <input type="email" placeholder="Adresse email" />
              </div>
              <div className="subject">
                <input type="text" placeholder="Sujet" />
              </div>
              <div className="desc">
                <textarea placeholder="Votre message"></textarea>
              </div>
              <div className="btnsend">
                <p>Envoyer le message</p>
              </div>
            </div>
          </div>

          <div className="slogan">
            <p>L'INFORMATION VÉRIFIÉE, VOTRE MEILLEURE ALLIÉE</p>
            <span>
              " Parce que chaque décision technologique mérite d'être basée sur des faits, pas sur du marketing "
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default AccueilPage