import React, { Component } from 'react'
import '../Assets/StudentSpace.scss' // Import du fichier SASS
import { MdCall, MdEmail } from 'react-icons/md'

export class StudentSpace extends Component {
  render() {
    return (
      <div className='StudentSpace'>
        <div className="heroStuSpace">
          <div className="bg">
            <div className="left"></div>
              <div className="center">
                <h1>TROUVEZ ICI VOTRE EMPLOI DU TEMPS</h1>
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

        <div className="content-container">
          {/* <section className="block_notification">
            <h2>Notifications</h2>
            
            <div className="notification-card alert">
              <div className="icon">⚠️</div>
              <div className="text-content">
                <strong>Emploi du temps modifié</strong>
                <span>Le cours de 14h est déplacé.</span>
              </div>
            </div>

            <div className="notification-card success">
              <div className="icon">👨‍🏫</div>
              <div className="text-content">
                <strong>Professeur arrivé</strong>
                <span>M. Rakoto est en salle B2.</span>
              </div>
            </div>
          </section> */}
          <div className="filter">
            <div className="filter_class">
              <p className="ftiltre active">Tous</p>
              <p className="filtre">L1</p>
              <p className="filtre">L2</p>
              <p className="filtre">L3</p>
              <p className="filtre">M1</p>
              <p className="filtre">M2</p>
            </div>
            <div className="filter_date">
              <h3>Filtrer par date</h3>
              <div className="date">
                <input type="date" name="" id="" />
                <span>Jusqu'à: </span>
                <input type="date" name="" id="" />
              </div>
            </div>
          </div>
          <div className="pub">
            <div className="pub_L1">
              <div className="title">Emploi pour les L1</div>
              <div className="pub_content">
                <div className="a"></div>
                <div className="b"></div>
                <div className="c"></div>
                <div className="d"></div>
              </div>
            </div>
            <div className="pub_L2">
              <div className="title">Emploi du temps pour les L2</div>
              <div className="pub_content">
                <div className="a"></div>
                <div className="b"></div>
                <div className="c"></div>
                <div className="d"></div>
              </div>
            </div>
            <div className="pub_L3">
              <div className="title">Emploi du temps pour les L3</div>
              <div className="pub_content">
                <div className="a"></div>
                <div className="b"></div>
                <div className="c"></div>
                <div className="d"></div>
              </div>
            </div>
            <div className="pub_M1">
              <div className="title">Emploi du temps pour les M1</div>
              <div className="pub_content">
                <div className="a"></div>
                <div className="b"></div>
                <div className="c"></div>
                <div className="d"></div>
              </div>
            </div>
            <div className="pub_M2">
              <div className="title">Emploi du temps pour les M2</div>
              <div className="pub_content">
                <div className="a"></div>
                <div className="b"></div>
                <div className="c"></div>
                <div className="d"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default StudentSpace