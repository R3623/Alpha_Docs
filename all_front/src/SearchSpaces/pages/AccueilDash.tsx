import React, { Component } from 'react'
import Bug from '../assets/logo-removebg-preview.png'
import Slayers from '../assets/logo.png'
import Ordi from '../assets/image12.png'
import '../assets/Accueil.scss'
import { MdAdd, MdAddCircle, MdClearAll, MdDelete, MdMeetingRoom } from 'react-icons/md'
import { BiArrowToLeft, BiArrowToRight, BiCalendar, BiCustomize, BiEditAlt, BiShareAlt, BiTime, BiUserCircle } from 'react-icons/bi'
import { CgSmile, CgSmileMouthOpen } from 'react-icons/cg'
import { BsBagCheck, BsStars } from 'react-icons/bs'

export class AccueilDash extends Component {
  render() {
    return (
      <div className='Accueil'>
        <div className="header">
          <div className="wlcm">
            <h3>Salut, Jb <CgSmile className='smile'/> <CgSmileMouthOpen className='smile'/></h3>
            <h3>Lorem, ipsum dolor sit amet consectetur adipisicing.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat fuga voluptas quos, totam placeat.</p>
          </div>
          <div className="card_header">
            <div className="add">
              <p><MdAdd className='add_icon'/></p>
            </div>
            <div className="card">
              <div className="img">
                <img src={Bug} alt="" />
              </div>
              <div className="text">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit am</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={Slayers} alt="" />
              </div>
              <div className="text">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit am</p>
              </div>
            </div>
            <div className="card">
              <div className="img">
                <img src={Ordi} alt="" />
              </div>
              <div className="text">
                <h4>Lorem ipsum</h4>
                <p>Lorem ipsum dolor sit am</p>
              </div>
            </div>
          </div>
        </div>
        <div className="notif_assignement_agenda">
          <div className="notif">
            <div className="title">
              <h3>Notification</h3>
              <div className="clear">
                <MdClearAll />
                <p>Clear</p>
              </div>
            </div>
            <div className="content">
              <div className="notify">
                <div className="shadow">
                  <div className="content">
                    <MdDelete />
                    <BiEditAlt />
                  </div>
                </div>
                <div className="notify_content">
                  <div className="titre">
                    <div className="ttr">
                      <h4>Anniv Yas <span><BsStars /></span></h4>
                      <p>Anniversaire de Yas | Madagascar</p>
                    </div>
                    <div className="points">
                      <p>...</p>
                    </div>
                  </div>
                  <div className="date">
                    <div className="date1">
                      <BiCalendar />
                      <p><span>Jan</span>, 10/2023</p>
                    </div>
                    <div className="date2">
                      <BiTime />
                      <p>10:10 <span>AM</span></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="notify">
                <div className="shadow">
                  <div className="content">
                    <MdDelete />
                    <BiEditAlt />
                  </div>
                </div>
                <div className="notify_content">
                  <div className="titre">
                    <div className="ttr">
                      <h4>Anniv Yas <span><BsStars /></span></h4>
                      <p>Anniversaire de Yas | Madagascar</p>
                    </div>
                    <div className="points">
                      <p>...</p>
                    </div>
                  </div>
                  <div className="date">
                    <div className="date1">
                      <BiCalendar />
                      <p><span>Jan</span>, 10/2023</p>
                    </div>
                    <div className="date2">
                      <BiTime />
                      <p>10:10 <span>AM</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="assignement">
            <div className="title">
              <h4>Assignement</h4>
              <div className="edit">
                <BiEditAlt />
                <p>Edit</p>
              </div>
            </div>
            <div className="content">
              <div className="list">
                <div className="titre">
                  <p>Design</p>
                  <span>...</span>
                </div>
                <div className="cont">
                  <h4>Design a packaging concept for a new product</h4>
                  <p>Lorem</p>
                </div>
                <div className="btn">
                  <p>Lorem ipsum</p>
                  <span><BiEditAlt /></span>
                </div>
              </div>
            </div>
            <div className="btna">
              <div className="add">
                <MdAdd className='add_icon'/>
              </div>
              <p>Add new assignement</p>
            </div>
          </div>
          <div className="agenda">
            <div className="title">
              <h3>May 2025</h3>
              <div className="icons">
                <BiArrowToLeft className='p'/>
                <BiArrowToRight className='p'/>
              </div>
            </div>
            <div className="calendar">
              <div className="dates">
                <p>Lun</p>
                <span>9</span>
              </div>
              <div className="dates">
                <p>Mar</p>
                <span>10</span>
              </div>
              <div className="dates">
                <p>Mer</p>
                <span>11</span>
              </div>
              <div className="dates">
                <p>Jeu</p>
                <span className='active'>12</span>
              </div>
              <div className="dates">
                <p>Ven</p>
                <span>13</span>
              </div>
              <div className="dates">
                <p>Sam</p>
                <span>14</span>
              </div>
              <div className="dates">
                <p>Dim</p>
                <span>15</span>
              </div>
            </div>
            <div className="content">
              <div className="times">
                <p>04:30 - 05:30 PM <span>.................................................................</span></p>
              </div>
              <div className="plane">
                <div className="pln">
                  <MdMeetingRoom className='icon'/>
                  <h3>Team meeting <br /><span>04:30 - 05:30 PM</span></h3>
                </div>
                <p className='point'>...</p>
              </div>
              <div className="times">
                <p>11:30 - 12:30 PM <span>................................................................</span></p>
              </div>
              <div className="plane">
                <div className="pln">
                  <BsBagCheck className='icon'/>
                  <h3>Meeting with new client <br /><span>04:30 - 05:30 PM</span></h3>
                </div>
                <p className='point'>...</p>
              </div>
            </div>
          </div>
        </div>
        <div className="task_update_chart">
          <div className="task">
            <div className="title">
              <div className="titre">
                <h3>Today tasks</h3>
                <div className="icon">
                  <BiCustomize />
                  <BiUserCircle />
                  <MdAddCircle />
                </div>
              </div>
              <div className="outils">
                <div className="edit">
                  <BiEditAlt />
                  <p>Edit</p>
                </div>
                <div className="share">
                  <BiShareAlt />
                  <p>Share</p>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="lists">
                <div className="shadow">
                  <div className="content">
                    <BiEditAlt />
                    <BiShareAlt />
                  </div>
                </div>
                <div className="list">
                  <div className="titre">
                    <h3>Integration front-back</h3>
                    <p>Sam, 10:10</p>
                  </div>
                  <div className="progress">
                    <p>90%</p>
                    <span></span>
                  </div>
                  <div className="desc">
                    <span className='span'></span>
                    <p>Prèsque</p>
                  </div>
                </div>
              </div>
              <div className="lists">
                <div className="shadow">
                  <div className="content">
                    <BiEditAlt />
                    <BiShareAlt />
                  </div>
                </div>
                <div className="list">
                  <div className="titre">
                    <h3>Integration front-back</h3>
                    <p>Sam, 10:10</p>
                  </div>
                  <div className="progress">
                    <p>90%</p>
                    <span></span>
                  </div>
                  <div className="desc">
                    <span className='span'></span>
                    <p>Prèsque</p>
                  </div>
                </div>
              </div>
              <div className="lists">
                <div className="shadow">
                  <div className="content">
                    <BiEditAlt />
                    <BiShareAlt />
                  </div>
                </div>
                <div className="list">
                  <div className="titre">
                    <h3>Integration front-back</h3>
                    <p>Sam, 10:10</p>
                  </div>
                  <div className="progress">
                    <p>90%</p>
                    <span></span>
                  </div>
                  <div className="desc">
                    <span className='span'></span>
                    <p>Prèsque</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="update">
            <div className="sary">
            </div>
            <div className="dark"></div>
            <div className="content">
              <div className="go">
                <h3>GO</h3>
                <p>Prenium</p>
              </div>
              <div className="btn">
                <p>Obtenir</p>
              </div>
            </div>
          </div>
          <div className="chart"></div>
        </div>
      </div>
    )
  }
}

export default AccueilDash