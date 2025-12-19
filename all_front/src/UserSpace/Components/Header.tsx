import React from 'react'
import '../assets/Header.scss'
import { Link, NavLink } from 'react-router-dom'
import { BiWorld, BiLogOut, BiSolidMessageSquareDots } from 'react-icons/bi'
// import { useAuth } from '../../context/AuthContext'

interface HeaderProps {
  showMsgTeach: boolean;
  setShowMsgTeach: (show: boolean) => void;
}

const Header: React.FC<HeaderProps> = () => {
  // const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className='HeaderHome'>
      <div className="logo">
        <h1>AlphaDocs</h1>
      </div>
      <div className="navigation">
        <NavLink to='/'>
          <p className="nav ">ACCUEIL</p>
        </NavLink>
        <NavLink to='/StudentSpace'>
          <p className="nav">A PROPOS</p>
        </NavLink>
        <NavLink to='/TeacherSpace'>
          <p className="nav">SERVICE</p>
        </NavLink>
        {/* {isAuthenticated ? (
          <>
            {user?.role === 'etudiant' && (
              <NavLink to='/StudentSpace'>
                <p className='nav'>EMPLOI DU TEMPS</p>
              </NavLink>
            )}
            {user?.role === 'enseignant' && (
              <NavLink to='/TeacherSpace'>
                <p className='nav'>Espace enseignant</p>
              </NavLink>
            )}
          </>
        ) : (
          <>
          </>
        )} */}
      </div>
      <div className="outils">
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
        <button className='logout'>Deconnexion</button>
        {/* {isAuthenticated ? (
          <>
            <div className="prfl">
              <div className="notif">
                <BellDot className='bell' />
                 {user?.role === 'enseignant' && (
                      <BiSolidMessageSquareDots className='mssg' onClick={() => setShowMsgTeach(!showMsgTeach)}/>
            )}
              </div>
              <div className="pfil">
                <div className="saryprfl">
                  <img src={User} alt="" />
                </div>
                <span className='username'>{user?.username}</span>
              </div>
              <div
                className='logout'
                onClick={logout}
              >
                <BiLogOut />
              </div>
            </div>
          </>
        ) : (
          <>
            <Link to='/connect' className='log'><p>Se connecter</p></Link>
            <Link to='/connect/register' className='sign'>S'inscrire</Link>
          </>
        )} */}
      </div>
    </div>
  )
}

export default Header