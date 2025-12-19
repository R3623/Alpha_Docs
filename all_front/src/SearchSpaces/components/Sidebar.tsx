import React from 'react'
import {
  BiBell, BiCalendar, BiCalendarEdit, BiCategory, BiChart,
  BiHelpCircle, BiHistory, BiLogOut, BiMessage, BiSidebar, BiUser
} from 'react-icons/bi'
import { MdSettings } from 'react-icons/md'
import '../assets/Sidebar.scss'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

const Sidebar: React.FC = () => {
  const { logout } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className='sidebar'>
      <div className="bar"></div>

      <div className="side">
        <BiSidebar />
      </div>

      <div className="contentSidebar">

        <NavLink
          to="/dashboard/"
          className={({ isActive }) => "navs" + (isActive ? " active" : "")}
        >
          <BiCategory />
        </NavLink>

        <NavLink
          to="/dashboard/Chart"
          className={({ isActive }) => "navs" + (isActive ? " active" : "")}
        >
          <BiHistory />
        </NavLink>

        <NavLink
          to="/dashboard/Membres"
          className={({ isActive }) => "navs" + (isActive ? " active" : "")}
        >
          <BiUser />
        </NavLink>

        <div className="navs">
          <BiBell />
        </div>

        {/* <NavLink
          to="/dashboard/Calendar"
          className={({ isActive }) => "navs" + (isActive ? " active" : "")}
        >
          <BiCalendar />
        </NavLink> */}

        {/* <NavLink
          to="/dashboard/Messages"
          className={({ isActive }) => "navs" + (isActive ? " active" : "")}
        >
          <BiMessage />
        </NavLink> */}

        {/* <div className="navs">
          <BiCalendarEdit />
        </div> */}

        <NavLink
          to="/dashboard/Settings"
          className={({ isActive }) => "navs" + (isActive ? " active" : "")}
        >
          <MdSettings />
        </NavLink>
      </div>

      <div className="help_logout">
        <NavLink
          to="/dashboard/Aide"
          className={({ isActive }) => "help" + (isActive ? " active" : "")}
        >
          <BiHelpCircle />
        </NavLink>

        <div
          className="logout"
          onClick={handleLogout}
        >
          <BiLogOut />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
