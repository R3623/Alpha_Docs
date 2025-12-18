import React from 'react'
import { BiBell, BiData, BiExport, BiSearch, BiSun } from 'react-icons/bi'
import { MdDarkMode, MdDashboard, MdIntegrationInstructions, MdSettings, MdWork } from 'react-icons/md'
import Photo from '../assets/user.png'
import '../assets/HeaderStyle.scss'
import { CgOptions } from 'react-icons/cg'
// import { useAuth } from '../../context/AuthContext'

const Header: React.FC = () => {
  // const { user } = useAuth();
  // const username = user ? user.username : "Utilisateur";

  return (
    <div className='Header'>
      <div className="header_navigation">
        <div className="selected">
          <CgOptions />
        </div>
        <div className="tdb">
          <MdDashboard />
          <p>Dashboard</p>
        </div>
        <div className="wrokflow">
          <MdWork />
          <p>Workflows</p>
        </div>
        <div className="int">
          <MdIntegrationInstructions />
          <p>Integration</p>
        </div>
        <div className="search">
          <BiSearch className='iconSearch'/>
          <input type="search" name="" id="" placeholder='recherche ...' />
        </div>
      </div>
      <div className="profil_preference">
        <div className="dl">
          <BiSun  className='l'/>
        </div>
        <div className="dark_light">
          <div className="light">
            <BiSun />
            <p>Light</p>
          </div>
          <div className="dark">
            <MdDarkMode />
            <p>Dark</p>
          </div>
        </div>
        <div className="notif_params">
          <div className="notif">
            <BiBell />
          </div>
          <div className="params">
            <MdSettings />
          </div>
        </div>
        <div className="export">
          <BiExport />
          <p>Export Data</p>
          <BiData className='data'/>
        </div>
        <div className="profil">
          <div className="photo">
            <img src={Photo} alt="" />
          </div>
          <p className="name">Rakoto</p>
        </div>
      </div>
    </div>
  )
}

export default Header