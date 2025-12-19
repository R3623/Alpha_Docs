import { Component } from 'react';
import '../Assets/AccueilSearch.scss';
// import heroImg from '../assets/pngtree-a-happy-male-student-sporting-backpack-and-clutching-book-is-looking-png-image_15721728-removebg-preview.png';
import heroImg from '../Assets/pngtree-a-happy-male-student-sporting-backpack-and-clutching-book-is-looking-png-image_15721728-removebg-preview.png'
// import pythonLogo from '../assets/logo_python-removebg-preview.png';
import pythonLogo from '../Assets/logo_python-removebg-preview.png'
// import jsLogo from '../assets/images-removebg-preview.png';
import jsLogo from '../Assets/images-removebg-preview.png'
// import reactLogo from '../assets/react-removebg-preview.png';
import reactLogo from '../Assets/react-removebg-preview.png'
// import cLogo from '../assets/c-removebg-preview.png';
import cLogo from '../Assets/c-removebg-preview.png'
// import nodeLogo from '../assets/node-removebg-preview.png';
import nodeLogo from '../Assets/node-removebg-preview.png'
// import phpLogo from '../assets/php-removebg-preview.png';
import phpLogo from '../Assets/php-removebg-preview.png'
// import rLogo from '../assets/r-removebg-preview.png';
import rLogo from '../Assets/r-removebg-preview.png'
// import cppLogo from '../assets/cpp-removebg-preview.png';
import cppLogo from '../Assets/cpp-removebg-preview.png'
// import djangoLogo from '../assets/django-removebg-preview.png';
import djangoLogo from '../Assets/django-removebg-preview.png'
// import symfonyLogo from '../assets/symfony-removebg-preview.png';
import symfonyLogo from '../Assets/symfony-removebg-preview.png'
import { NavLink } from 'react-router-dom';





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
                <NavLink to='/SearchSpace'>
                  <button className="btn primary">Commencer</button>
                </NavLink>
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

        <section className="categories">
          <h2>Top Categories</h2>
          <div className="cats">
            <div className="cts
            ">
              <button className="pill">
              <img src={pythonLogo} alt="Python logo"  />
              Python
              </button>
            <button className="pill"><img src={jsLogo} alt="JS logo"   />JS</button>
            <button className="pill"><img src={reactLogo} alt="React logo" className="pill-icon" />React</button>
            <button className="pill"><img src={phpLogo} alt="PHP logo" className="pill-icon" />PHP</button>
            <button className="pill"><img src={cLogo} alt="C logo" className="pill-icon" />C</button>
            </div>
            <div className="cts">
              <button className="pill"><img src={nodeLogo} alt="Node logo" className="pill-icon" />Node.js</button>
            <button className="pill"><img src={cppLogo} alt="C++ logo" className="pill-icon" />C++</button>
            <button className="pill"><img src={djangoLogo} alt="Django logo" className="pill-icon" />Django</button>
            <button className="pill"><img src={symfonyLogo} alt="Symfony logo" className="pill-icon" />Symfony</button>
            <button className="pill"><img src={rLogo} alt="R logo" className="pill-icon" />R</button>
            </div>
          </div>
          <div className='features'>
            <div className="card ">
              <div className="c1"></div>
              <div className="card_content">
                <h3>Fiabilité de ressource</h3>
              <p>Telecharger des documents fiables et cértifiés.</p>
              <button className="btn primary">Explorer</button>
              </div>
            </div>

            <div className="card ">
              <div className="c2"></div>
              <div className="card_content">
                <h3>Version Premium</h3>
              <p>Chercher des documents et télécharger les sans limites</p>
              <button className="btn ghost">Obtenir</button>
              </div>
            </div>
          </div>
        </section>

        

        <section className="popular">
          <h2>Quelques videos des partenariats certifié</h2>

          <div className="courses-grid">
            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/rfscVS0vtbw"
                title="Python Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>Python Tutorial for Beginners</strong>
                <p>Apprenez les bases de Python, un langage de programmation polyvalent utilisé pour le développement web, l'analyse de données et l'automatisation.</p>
                <p className="muted">freeCodeCamp • 4h 26m</p>
              </div>
            </div>

            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/w7ejDZ8SWv8"
                title="React Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>React Tutorial for Beginners</strong>
                <p>Découvrez React, une bibliothèque JavaScript populaire pour créer des interfaces utilisateur interactives et des applications web modernes.</p>
                <p className="muted">freeCodeCamp • 3h 39m</p>
              </div>
            </div>

            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/OK_JCtrrv-c"
                title="PHP Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>PHP Tutorial for Beginners</strong>
                <p>Maîtrisez PHP, un langage de script côté serveur essentiel pour le développement web dynamique et les applications backend.</p>
                <p className="muted">freeCodeCamp • 6h 49m</p>
              </div>
            </div>

            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/jS4aFq5-91M"
                title="JavaScript Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>JavaScript Tutorial for Beginners</strong>
                <p>Apprenez JavaScript, le langage de programmation du web, pour ajouter de l'interactivité à vos sites et applications.</p>
                <p className="muted">freeCodeCamp • 3h 26m</p>
              </div>
            </div>
          </div>
          <div className="courses-grid">
            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/EU7PRmCpx-0"
                title="Laravel Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>Laravel Tutorial for Beginners</strong>
                <p>Découvrez Laravel, un framework PHP élégant et puissant pour développer des applications web robustes et scalables.</p>
                <p className="muted">Traversy Media • 2h 45m</p>
              </div>
            </div>

            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/RfMkdvN-23o"
                title="Node.js Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>Node.js Tutorial for Beginners</strong>
                <p>Apprenez Node.js pour créer des applications serveur évolutives avec JavaScript côté serveur.</p>
                <p className="muted">freeCodeCamp • 3h 49m</p>
              </div>
            </div>

            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/rHux0gMZ3Eg"
                title="Django Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>Django Tutorial for Beginners</strong>
                <p>Maîtrisez Django, un framework web Python de haut niveau pour développer des applications web rapidement.</p>
                <p className="muted">freeCodeCamp • 4h 0m</p>
              </div>
            </div>

            <div className="course">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/OK_JCtrrv-c"
                title="Symfony Tutorial for Beginners"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              <div className="meta">
                <strong>Symfony Tutorial for Beginners</strong>
                <p>Explorez Symfony, un framework PHP professionnel pour construire des applications web d'entreprise.</p>
                <p className="muted">The Net Ninja • 1h 30m</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default AccueilSearch