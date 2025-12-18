import React, { Component } from 'react'
import '../Assets/Accueil.scss'
import { MdCall, MdEmail } from 'react-icons/md'

export class AccueilPage extends Component {
  render() {
    return (
     <div className="container">
        <div className="hero">
          <div className="bg">
            <div className="left"></div>
            <div className="center">
              <p>Bienvenu</p>
              <h1>LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING ELIT. SEPE, QUAS.</h1>
              <div className="contact">
                <div className="appel">
                  <MdCall className='iconCall' />
                  <div className="txt">
                    <p>Appelez</p>
                    <span>+261 38 80 542 84</span>
                  </div>
                </div>
                <div className="mail">
                  <MdEmail className='iconMail'/>
                  <div className="txt">
                    <p>E-mail</p>
                    <span>bugslayers.codeur@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bgHero">
              <div className="saryBg"></div>
              <div className="saryHero">
              </div>
            </div>
            <div className="right"></div>
          </div>
          <div className="heroContent"></div>
        </div>
        <div className="content">
          <div className="about">
            <div className="aboutContent">
              <div className="sary"></div>
              <div className="aboutTxt">
                <div className="titre">
                  <p className="title">A propos</p>
                  <h3>Pourquoi les gens nous choisi?</h3>
                </div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ex ratione, et vero ad magni repellendus? Numquam aliquid velit possimus eius dignissimos quasi placeat sed, natus qui repudiandae magni illum.</span>
                <div className="cadres">
                  <div className="cadre"></div>
                  <div className="cadre"></div>
                </div>
              </div>
            </div>
            <div className="about_call">
              <div className="call">
                <MdCall className='callI'/>
                <div className="number">
                  <p>+261 38 80 542 84</p>
                  <span>Appeler nous directement, nous somme disponible 24/7</span>
                </div>
              </div>
              <div className="btn_read">
                <p>VOIR PLUS</p>
              </div>
            </div>
          </div>
          <div className="services">
            <div className="titre">
              <p className="title">
                Nos Services
              </p>
              <h3>Explorez nos services</h3>
            </div>
            <div className="contentS">
              <div className="cadreS">
                <div className="cadre"></div>
                <div className="cadre"></div>
                <div className="cadre"></div>
              </div>
              <div className='cadreS'>
                <div className="cadre"></div>
                <div className="cadre"></div>
                <div className="cadre"></div>
              </div>
            </div>
          </div>
          <div className="slogan">
            <p>LOREM IPSUM DOLOR</p>
            <span>" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, adipisci! "</span>
          </div>
        </div>
     </div>
    )
  }
}

export default AccueilPage