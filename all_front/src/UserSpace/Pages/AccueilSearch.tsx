import { Component } from 'react';
import '../assets/AccueilSearch.scss';
import heroImg from '../assets/pngtree-a-happy-male-student-sporting-backpack-and-clutching-book-is-looking-png-image_15721728-removebg-preview.png';
import pythonLogo from '../assets/logo_python-removebg-preview.png';
import jsLogo from '../assets/images-removebg-preview.png';
import reactLogo from '../assets/react-removebg-preview.png';
import cLogo from '../assets/c-removebg-preview.png';
import nodeLogo from '../assets/node-removebg-preview.png';
import phpLogo from '../assets/php-removebg-preview.png';
import rLogo from '../assets/r-removebg-preview.png';
import cppLogo from '../assets/cpp-removebg-preview.png';
import djangoLogo from '../assets/django-removebg-preview.png';
import symfonyLogo from '../assets/symfony-removebg-preview.png';





export class AccueilSearch extends Component {
  render() {
    return (
      <div className="accueil-search">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-left">
              <p className="eyebrow">Apprendre avec des ressources fiables</p>
              <h1>Bienvenue sur notre site Alpha Docs</h1>
              <p className="lead">Commencer votre apprentissage avec notre ia</p>

              <div className="cta">
                <button className="btn primary">Commencer</button>
                <button className="btn ghost">Explorer</button>
              </div>
            </div>

            <div className="hero-right">
              <div className="hero-image" aria-hidden="true">
                <img src={heroImg} alt="Étudiant lisant" className="hero-img" />
                <div className="vignette" />
              </div>

              <div className="stat-card">
                <div className="avatars">
                  <div className="a" style={{background:'#ffd1dc'}} />
                  <div className="a" style={{background:'#cfe9ff'}} />
                  <div className="a" style={{background:'#dbe7ff'}} />
                </div>
                <div className="stat">100K+ <small>Enrolled Students</small></div>
              </div>
            </div>
          </div>
          <div className="bg"></div>
        </section>

        <section className="categories container">
          <h2>Top Categories</h2>
          <div className="cats">
            <button className="pill"><img src={pythonLogo} alt="Python logo" style={{ width: '40px', height: '40px' }} />Python</button>
            <button className="pill"><img src={jsLogo} alt="JS logo" style={{ width: '40px', height: '40px' }} />JS</button>
            <button className="pill"><img src={reactLogo} alt="React logo" className="pill-icon" />React</button>
            <button className="pill"><img src={phpLogo} alt="PHP logo" className="pill-icon" />PHP</button>
            <button className="pill"><img src={cLogo} alt="C logo" className="pill-icon" />C</button>
            <button className="pill"><img src={nodeLogo} alt="Node logo" className="pill-icon" />Node.js</button>
            <button className="pill"><img src={cppLogo} alt="C++ logo" className="pill-icon" />C++</button>
            <button className="pill"><img src={djangoLogo} alt="Django logo" className="pill-icon" />Django</button>
            <button className="pill"><img src={symfonyLogo} alt="Symfony logo" className="pill-icon" />Symfony</button>
            <button className="pill"><img src={rLogo} alt="R logo" className="pill-icon" />R</button>
          </div>
          <div className='features container'>
            <div className="card">
              <h3>Fiabilité de ressource</h3>
              <p>Telecharger des documents fiables et cértifiés.</p>
              <button className="btn primary">Telecharger</button>
            </div>

            <div className="card">
              <h3>Version Premium</h3>
              <p>Chercher des documents et télécharger les sans limites</p>
              <button className="btn ghost">Upgrade</button>
            </div>
          </div>
        </section>

        

        <section className="popular container">
          <h2>Quelques videos des partenariats google certifié</h2>

          <div className="courses-grid">
            <div className="course">
              <div className="thumb" />
              <div className="meta">
                <strong>Mobile App Developmen</strong>
                <p className="muted">21 Lessons • 3h</p>
              </div>
            </div>

            <div className="course">
              <div className="thumb" />
              <div className="meta">
                <strong>Building Chatbots with GPT</strong>
                <p className="muted">12 Lessons • 2h</p>
              </div>
            </div>

            <div className="course">
              <div className="thumb" />
              <div className="meta">
                <strong>Therapeutic Approaches</strong>
                <p className="muted">14 Lessons • 4h</p>
              </div>
            </div>

          </div>
        </section>
      </div>
    )
  }
}

export default AccueilSearch