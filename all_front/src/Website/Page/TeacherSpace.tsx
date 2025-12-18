import React, { Component } from 'react'
import '../Assets/TeacherSpace.scss'
import { MdCall, MdEmail } from 'react-icons/md'

export class TeacherSpace extends Component {
  render() {
    return (
      <div className='TeacherSpace'>
        <div className="heroTeachSpace">
          <div className="bg">
            <div className="left"></div>
              <div className="center">
                <h1>ESPACE ENSEIGNANT</h1>
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

      </div>
    )
  }
}

export default TeacherSpace