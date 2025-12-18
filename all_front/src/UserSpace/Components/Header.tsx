import React from 'react'
import { BiLogOut } from 'react-icons/bi'
import { useAuth } from '../../context/AuthContext'

const Header: React.FC = () => {
  const { logout, user } = useAuth()

  const handleLogout = async () => {
    await logout()
  }

  return (
    <div className="header">
      <div className="header-content">
        <div className="user-info">
          {user && <span>Bonjour, {user.username}</span>}
        </div>
        <div className="logout" onClick={handleLogout}>
          Déconnecter <BiLogOut />
        </div>
      </div>
    </div>
  )
}

export default Header