import { useLayoutEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { User, Settings, Bell, Shield, LogOut } from 'lucide-react'
import './ProfileModal.css'

const menuItems = [
  {
    id: 'profile',
    label: 'Mi perfil',
    description: 'Ver y editar mi información',
    icon: User,
  },
  {
    id: 'preferences',
    label: 'Preferencias',
    description: 'Ajustes de cuenta',
    icon: Settings,
  },
  {
    id: 'notifications',
    label: 'Notificaciones',
    description: 'Centro de notificaciones',
    icon: Bell,
    badge: 3,
  },
  {
    id: 'security',
    label: 'Seguridad',
    description: 'Cambiar contraseña y 2FA',
    icon: Shield,
  },
  {
    id: 'logout',
    label: 'Cerrar sesión',
    description: 'Salir de la plataforma',
    icon: LogOut,
    danger: true,
  },
]

function ProfileModal({ open, onClose, anchorRef }) {
  const [coords, setCoords] = useState({ left: 12, bottom: 16 })

  useLayoutEffect(() => {
    if (!open || !anchorRef?.current) return

    const rect = anchorRef.current.getBoundingClientRect()
    setCoords({
      left: rect.right + 12,
      bottom: Math.max(12, window.innerHeight - rect.bottom),
    })
  }, [open, anchorRef])

  if (!open) return null

  return createPortal(
    <>
      <div className="profile-modal-overlay" onClick={onClose} />
      <div
        className="profile-modal"
        role="menu"
        style={{ left: coords.left, bottom: coords.bottom }}
      >
        {menuItems.map((item) => {
          const Icon = item.icon
          const className = item.danger
            ? 'profile-modal-item profile-modal-item--danger'
            : 'profile-modal-item'

          return (
            <button key={item.id} type="button" role="menuitem" className={className}>
              <Icon size={20} strokeWidth={1.75} />
              <span className="profile-modal-item-text">
                <span className="profile-modal-item-label">{item.label}</span>
                <span className="profile-modal-item-description">{item.description}</span>
              </span>
              {item.badge != null && (
                <span className="profile-modal-badge">{item.badge}</span>
              )}
            </button>
          )
        })}
      </div>
    </>,
    document.body,
  )
}

export default ProfileModal
