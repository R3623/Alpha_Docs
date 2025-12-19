# AlphaDocs

A modern web application for document search and learning, built with React, TypeScript, and Django.

## Features

- User authentication (login/register)
- Document search with AI assistance
- Video tutorials from certified partners
- Responsive design with modern UI

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Django + Django REST Framework
- **Database**: SQLite
- **Styling**: Tailwind CSS + SCSS

## Development

### Prerequisites

- Node.js 18+
- Python 3.11+
- Docker & Docker Compose

### Local Setup

1. **Backend**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py migrate
   python manage.py runserver 8001
   ```

2. **Frontend**:
   ```bash
   cd all_front
   npm install
   npm run dev
   ```

3. Open http://localhost:5173

### Docker Deployment

The application is configured for automatic deployment following hackathon rules.

```bash
docker compose up --build
```

The application will be available at the URL provided by the hackathon infrastructure.

## Project Structure

```
├── all_front/          # React frontend
├── backend/           # Django backend
├── docker-compose.yml # Docker configuration
└── README.md
```

## Deployment Rules Compliance

This project follows the hackathon deployment rules:
- Service `web` listens on port 3000
- No external port exposure
- No Traefik configuration
- Automatic deployment via Jenkins
