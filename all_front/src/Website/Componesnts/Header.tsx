import React, { useState } from 'react'
import '../Assets/Header.scss'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { BiWorld, BiLogOut, BiSolidMessageSquareDots, BiMenu, BiX } from 'react-icons/bi'
import Logo from '../Assets/logo-removebg-preview.png'
import User from '../Assets/user.png'
import { BellDot } from 'lucide-react'

interface HeaderProps {
  showMsgTeach: boolean;
  setShowMsgTeach: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    closeMenu();
    
    // Si on n'est pas sur la page d'accueil, naviguer d'abord
    if (location.pathname !== '/') {
      navigate('/');
      // Attendre que la navigation soit terminée avant de scroller
      setTimeout(() => {
        const element = document.querySelector(`.${sectionId}`);
        if (element) {
          const headerOffset = 90; // Hauteur du header
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    } else {
      // Si on est déjà sur la page d'accueil, scroller directement
      const element = document.querySelector(`.${sectionId}`);
      if (element) {
        const headerOffset = 90;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const handleAccueilClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMenu();
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='HeaderHome'>
      <div className="logo">
        {/* <div className="img">
          <img src={Logo} alt="" />
        </div> */}
        <h1>AlphaCods</h1>
      </div>
      
      <div className={`navigation ${menuOpen ? 'active' : ''}`}>
        <a href="/" onClick={handleAccueilClick}>
          <p className="nav">ACCUEIL</p>
        </a>
        <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>
          <p className="nav">A PROPOS</p>
        </a>
        <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}>
          <p className="nav">SERVICE</p>
        </a>
      </div>
      
      <div className={`outils ${menuOpen ? 'active' : ''}`}>
        <BiWorld className='world'/>
        <div className="chageLangue">
          <select name="" id="">
            <option value="fr">Français</option>
            <option value="En">English</option>
            <option value="it">Italiano</option>
          </select>
        </div>
      </div>
      
      <div className="btn">
        <Link to='/connect' className='log' onClick={closeMenu}>
          <p>Se connecter</p>
        </Link>
        <Link to='/connect/register' className='sign' onClick={closeMenu}>
          S'inscrire
        </Link>
      </div>

      <div className="menuToggle" onClick={toggleMenu}>
        {menuOpen ? <BiX /> : <BiMenu />}
      </div>
    </div>
  )
}

export default Header