import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import { navItems } from './navItems'
import ProfileModal from './ProfileModal'
import './SideMenu.css'

function getInitials(name) {
  if (!name) return '?'
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function SideMenu({
  title,
  subtitle = 'Administración de Edificios',
  userName = 'Laura Administradora',
  userRole = 'Administrador',
  userAvatar,
}) {
  const [profileOpen, setProfileOpen] = useState(false)
  const profileBtnRef = useRef(null)

  useEffect(() => {
    if (!profileOpen) return

    function onKeyDown(event) {
      if (event.key === 'Escape') setProfileOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [profileOpen])

  function closeProfile() {
    setProfileOpen(false)
  }

  return (
    <aside className="sidemenu">
      <header className="sidemenu-header">
        <img src="/logo.svg" alt={`Logo de ${title}`} className="sidemenu-logo" />
        <h1 className="sidemenu-title">{title}</h1>
        <p className="sidemenu-subtitle">{subtitle}</p>
      </header>

      <nav className="sidemenu-nav" aria-label="Secciones">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={closeProfile}
              className={({ isActive }) =>
                isActive ? 'sidemenu-link active' : 'sidemenu-link'
              }
            >
              <Icon size={20} strokeWidth={1.75} />
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <div className="sidemenu-footer">
        <button
          ref={profileBtnRef}
          type="button"
          className="sidemenu-profile"
          aria-expanded={profileOpen}
          aria-haspopup="menu"
          onClick={() => setProfileOpen((open) => !open)}
        >
          <span className="sidemenu-avatar-wrap">
            {userAvatar ? (
              <img src={userAvatar} alt="" className="sidemenu-avatar" />
            ) : (
              <span className="sidemenu-avatar sidemenu-avatar--initials">
                {getInitials(userName)}
              </span>
            )}
            <span className="sidemenu-status" aria-hidden="true" />
          </span>
          <span className="sidemenu-profile-text">
            <span className="sidemenu-profile-name">{userName}</span>
            <span className="sidemenu-profile-role">{userRole}</span>
          </span>
          <ChevronDown
            size={16}
            className={profileOpen ? 'sidemenu-chevron open' : 'sidemenu-chevron'}
          />
        </button>
      </div>

      <ProfileModal
        open={profileOpen}
        onClose={closeProfile}
        anchorRef={profileBtnRef}
      />
    </aside>
  )
}

export default SideMenu
