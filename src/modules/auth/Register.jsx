import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { KeyRound, Mail, User, Lock, Hash, ShieldCheck } from 'lucide-react'
import registry from './data/mockRegistry.json'
import './Auth.css'

const mockApartments = registry.apartments
const mockUsers = registry.users

function Register() {
  const navigate = useNavigate()
  const [apto, setApto] = useState('')
  const [codigo, setCodigo] = useState('')
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [ok, setOk] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setOk('')

    const cleanApto = apto.trim()
    const found = mockApartments.find((a) => a.apto === cleanApto)

    if (!found) {
      setError('Ese apartamento no existe en este edificio.')
      return
    }
    if (mockUsers.some((u) => u.apartmentId === found.id)) {
      setError('Este apartamento ya tiene cuenta. Inicie sesión o recupere su contraseña.')
      return
    }
    if (mockUsers.some((u) => u.email.toLowerCase() === email.trim().toLowerCase())) {
      setError('Ese correo ya está registrado.')
      return
    }
    if (found.codigo !== codigo.trim()) {
      setError('El código no coincide. Revise la carta/recibo de su apartamento.')
      return
    }

    setOk(`Cuenta creada para Apto ${cleanApto}. Ya puede iniciar sesión.`)
    setTimeout(() => navigate('/login'), 1500)
  }

  return (
    <div className="login-page">
      <section className="login-left">
        <div className="login-left-overlay" />
        <div className="login-left-content">
          <h2 className="login-left-title">Un registro por apartamento, así de simple</h2>
          <p className="login-left-subtitle">
            <span className="login-left-badge">
              <ShieldCheck size={16} />
            </span>
            Regístrese una vez con el código de su casa. Después solo inicie sesión.
          </p>
        </div>
      </section>

      <div className="login-right">
        <div className="login-card">
          <header className="login-card-header">
            <img src="/logo.svg" alt="Logo Altos del Parque" className="login-logo" />
            <h1 className="login-title">Altos del Parque</h1>
            <p className="login-subtitle">Registro por apartamento — solo una vez</p>
          </header>

          <form onSubmit={handleSubmit} className="login-form">
            <label className="login-label" htmlFor="apto">Número de apartamento</label>
            <div className="login-input-wrap">
              <Hash size={16} className="login-input-icon" />
              <input id="apto" placeholder="5" value={apto} onChange={(e) => setApto(e.target.value)} required />
            </div>

            <label className="login-label" htmlFor="codigo">Código del apartamento</label>
            <div className="login-input-wrap">
              <KeyRound size={16} className="login-input-icon" />
              <input id="codigo" placeholder="Ej: AP5-G7" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
            </div>

            <label className="login-label" htmlFor="nombre">Nombre completo</label>
            <div className="login-input-wrap">
              <User size={16} className="login-input-icon" />
              <input id="nombre" placeholder="Su nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
            </div>

            <label className="login-label" htmlFor="email2">Correo electrónico</label>
            <div className="login-input-wrap">
              <Mail size={16} className="login-input-icon" />
              <input id="email2" type="email" placeholder="ejemplo@correo.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <label className="login-label" htmlFor="pass2">Contraseña</label>
            <div className="login-input-wrap">
              <Lock size={16} className="login-input-icon" />
              <input id="pass2" type="password" placeholder="Cree su contraseña" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>

            {error && <p className="reg-error">{error}</p>}
            {ok && <p className="reg-ok">{ok}</p>}

            <button type="submit" className="login-btn-primary reg-submit">Registrarme</button>
          </form>

          <p className="login-footer">
            ¿Ya tiene cuenta? <Link to="/login">Iniciar sesión</Link>
          </p>
          <p className="reg-hint">Prueba: 1 ya está ocupado. Prueba 5 / AP5-G7.</p>
        </div>
      </div>
    </div>
  )
}

export default Register
