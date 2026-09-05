import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from 'lucide-react'
import './Auth.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    alert(`Iniciando sesión con: ${email}`)
  }

  function handleGuest() {
    alert('Entrando como invitado...')
  }

  return (
    <div className="login-page">
      <section className="login-left">
        <div className="login-left-overlay" />
        <div className="login-left-content">
          <h2 className="login-left-title">Gestione su edificio de forma simple, segura y eficiente</h2>
          <p className="login-left-subtitle">
            <span className="login-left-badge">
              <ShieldCheck size={16} />
            </span>
            Toda la información de su edificio en un solo lugar.
          </p>
        </div>
      </section>

      <div className="login-right">
        <div className="login-card">
          <header className="login-card-header">
            <img src="/logo.svg" alt="Logo Altos del Parque" className="login-logo" />
            <h1 className="login-title">Altos del Parque</h1>
            <p className="login-subtitle">Administración de Edificios</p>
          </header>

          <h2 className="login-welcome">Bienvenido de nuevo</h2>
          <p className="login-hint">Inicie sesión para continuar</p>

          <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label" htmlFor="email">Correo electrónico</label>
            <div className="login-input-wrap">
              <Mail size={16} className="login-input-icon" />
              <input id="email" type="email" placeholder="ejemplo@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <label className="login-label" htmlFor="password">Contraseña</label>
            <div className="login-input-wrap">
              <Lock size={16} className="login-input-icon" />
              <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Ingrese su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <button type="button" className="login-eye" onClick={() => setShowPassword((v) => !v)} aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}>
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>

            <div className="login-forgot">
              <a href="#">¿Olvidó su contraseña?</a>
            </div>

            <button type="submit" className="login-btn-primary">Iniciar sesión</button>
            <div className="login-divider"><span>o</span></div>
            <button type="button" className="login-btn-guest" onClick={handleGuest}>
              <ShieldCheck size={16} />
              Iniciar sesión como invitado
            </button>
          </form>

          <p className="login-footer">
            ¿No tiene una cuenta? <Link to="/register">Regístrese aquí</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
