import React from 'react'
import '../Assets/Footer.scss'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { Link } from 'react-router-dom'
// import Logo from '../Assets/logo-removebg-preview.png'

const Footer = () => {
  return (
    <div className='Footer'>
      <div className="left"></div>
      
      <div className="center">
        <div className="leftincenter">
          <div className="about">
            <div className="logo">
              <div className="photo">
                {/* <img src={Logo} alt="AlphaCods Logo" /> */}
              </div>
              <h3>AlphaCods</h3>
            </div>
            <p className="spann">
              Votre source fiable d'informations technologiques vérifiées. 
              Nous centralisons uniquement des contenus provenant de sources 
              officielles et de créateurs certifiés pour vous offrir des 
              informations de qualité.
            </p>
          </div>
          
          <div className="contact">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <MdPhone />
              <span>+261 38 80 542 84</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
              <MdEmail />
              <span>bugslayers.codeur@gmail.com</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MdLocationOn />
              <span>Antananarivo, Madagascar</span>
            </div>
          </div>
        </div>
        
        <div className="rightincenter">
          <h3>Liens Rapides</h3>
          <div className="link">
            <Link to="/">
              <p>Accueil</p>
            </Link>
            <Link to="/about">
              <p>À propos</p>
            </Link>
            <Link to="/services">
              <p>Services</p>
            </Link>
            {/* <Link to="/contact">
              <p>Contact</p>
            </Link>
            <Link to="/documentation">
              <p>Documentation</p>
            </Link> */}
          </div>
          
          <div className="reseau_sociaux">
            <div className="r_s">
              <p>
                <FaFacebookF />
              </p>
            </div>
            <div className="r_s">
              <p>
                <FaTwitter />
              </p>
            </div>
            <div className="r_s">
              <p>
                <FaLinkedinIn />
              </p>
            </div>
            <div className="r_s">
              <p>
                <FaInstagram />
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="right"></div>
    </div>
  )
}

export default Footer