import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, ChartNoAxesCombined, Check, Clock3, CreditCard, FileText, Menu, MessageCircle, ShieldCheck, Users, X } from 'lucide-react'
import DashboardPreview from './components/DashboardPreview/DashboardPreview'
import './LandingPage.css'

const buildingPhoto = 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=85'
const features = [
  { label: 'Pagos', icon: CreditCard, color: 'green', description: 'Centraliza el registro y la consulta de los pagos de tu comunidad.' },
  { label: 'Gastos', icon: FileText, color: 'red', description: 'Organiza los gastos y la información de los proveedores del edificio.' },
  { label: 'Residentes', icon: Users, color: 'purple', description: 'Mantén organizada la información de los residentes de tu comunidad.' },
  { label: 'Apartamentos', icon: Building2, color: 'blue', description: 'Consulta los apartamentos y el estado de sus saldos en un solo lugar.' },
  { label: 'Reportes', icon: ChartNoAxesCombined, color: 'orange', description: 'Conoce los indicadores de tu edificio para tomar mejores decisiones.' },
  { label: 'Comunicaciones', icon: MessageCircle, color: 'green', description: 'Facilita la comunicación y mantén informada a tu comunidad.' },
]
const steps = [
  { icon: Building2, title: 'Configura tu edificio', text: 'Registra la información básica.', color: 'blue' },
  { icon: Users, title: 'Carga la información', text: 'Apartamentos, residentes y conceptos.', color: 'blue' },
  { icon: FileText, title: 'Gestiona las operaciones', text: 'Registra pagos y gastos día a día.', color: 'green' },
  { icon: ChartNoAxesCombined, title: 'Obtén reportes', text: 'Toma mejores decisiones.', color: 'purple' },
]

function Brand() {
  return <a className="landing-brand" href="#inicio" aria-label="Enjadmin, inicio"><Building2 strokeWidth={2.5} /><span>Enjadmin</span></a>
}

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dialogContent, setDialogContent] = useState(null)
  const dialogRef = useRef(null)

  function showDialog(title, description) {
    setDialogContent({ title, description })
    setMenuOpen(false)
    dialogRef.current.showModal()
  }

  function requestDemo() {
    showDialog('Conoce Enjadmin', 'Explora el panel de demostración y descubre cómo organizar la administración de tu edificio. Los datos que encontrarás son de ejemplo.')
  }

  function showContact() {
    showDialog('Hablemos de tu edificio', 'El canal de contacto estará disponible próximamente. Mientras tanto, puedes explorar el panel de demostración de Enjadmin.')
  }

  function navigation() {
    return <><a href="#inicio" className="landing-nav-active" onClick={() => setMenuOpen(false)}>Inicio</a><a href="#funcionalidades" onClick={() => setMenuOpen(false)}>Funcionalidades</a><button onClick={() => showDialog('Planes y precios', 'Estamos preparando los planes de Enjadmin. Próximamente podrás consultar aquí las opciones para tu edificio.')}>Precios</button><button onClick={showContact}>Contacto</button></>
  }

  return (
    <div className="landing-page" id="inicio">
      <header className="landing-header landing-container">
        <Brand />
        <nav className={`landing-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Navegación principal">{navigation()}</nav>
        <div className="landing-header-actions"><Link className="landing-button landing-button-outline" to="/dashboard">Iniciar sesión</Link><button className="landing-button" onClick={requestDemo}>Solicitar demostración <ArrowRight size={15} /></button></div>
        <button className="landing-menu-toggle" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="landing-hero landing-container" aria-labelledby="landing-title">
          <div className="landing-hero-copy"><span className="landing-pill">Administración de edificios, más fácil</span><h1 id="landing-title">Tu edificio,<br /><span>en buenas manos</span></h1><p>Centraliza pagos, gastos, residentes y reportes<br className="landing-desktop-break" /> en un solo lugar.</p><div className="landing-button-row"><button className="landing-button" onClick={requestDemo}>Solicitar demostración <ArrowRight size={17} /></button><a className="landing-button landing-button-outline" href="#solucion">Conocer más</a></div>
            <div className="landing-benefits"><span><ChartNoAxesCombined />Más control</span><span><Clock3 />Menos trabajo</span><span><ShieldCheck />Más transparencia</span></div>
          </div>
          <div className="landing-hero-visual"><DashboardPreview /><div className="landing-floating-note"><span className="landing-icon-tile blue"><Building2 /></span><b>Información clara,<br />edificios más organizados.</b><ArrowRight /></div></div>
        </section>

        <section className="landing-features landing-container" id="funcionalidades" aria-labelledby="landing-features-title"><div className="landing-section-heading"><p className="landing-eyebrow">Todo lo que necesitas</p><h2 id="landing-features-title">Funciones principales</h2></div><div className="landing-feature-grid">{features.map(({ label, icon: Icon, color, description }) => <button key={label} className="landing-feature-card" onClick={() => showDialog(label, description)}><span className={`landing-icon-tile ${color}`}><Icon /></span><h3>{label}</h3></button>)}</div></section>

        <section className="landing-solution landing-container" id="solucion" aria-labelledby="landing-solution-title"><div><p className="landing-eyebrow">Una solución completa</p><h2 id="landing-solution-title">Más organización<br />para tu edificio</h2><p className="landing-section-text">Gestiona la información de tu comunidad<br className="landing-desktop-break" /> de forma simple, segura y eficiente.</p><a className="landing-button" href="#funcionalidades">Ver funcionalidades <ArrowRight size={17} /></a></div><div className="landing-building"><img src={buildingPhoto} alt="Edificio residencial moderno rodeado de vegetación" loading="lazy" /><div className="landing-floating-note"><span className="landing-icon-tile blue"><Building2 /></span><b>Edificios más organizados,<br />comunidades más felices.</b></div></div></section>

        <section className="landing-process" aria-labelledby="landing-process-title"><div className="landing-container"><div className="landing-section-heading"><p className="landing-eyebrow">Cómo funciona</p><h2 id="landing-process-title">Empieza en 4 pasos</h2></div><div className="landing-steps">{steps.map(({ icon: Icon, title, text, color }, index) => <div className="landing-step" key={title}><span className={`landing-step-icon ${color}`}><Icon /></span><h3>{title}</h3><p>{text}</p>{index < steps.length - 1 && <ArrowRight className="landing-step-arrow" aria-hidden="true" />}</div>)}</div></div></section>

        <section className="landing-cta landing-container" style={{ '--landing-building-image': `url("${buildingPhoto}")` }}><div><p className="landing-eyebrow">Es momento de dar el siguiente paso</p><h2>Moderniza la administración<br />de tu edificio con Enjadmin</h2><p>Más control, menos trabajo, comunidades más organizadas.</p><div className="landing-button-row"><button className="landing-button landing-button-white" onClick={requestDemo}>Solicitar demostración <ArrowRight size={17} /></button><button className="landing-button landing-button-light-outline" onClick={showContact}>Contáctanos</button></div></div><ul>{['Implementación sencilla', 'Acompañamiento del equipo', 'Adaptado a tu edificio'].map(text => <li key={text}><Check />{text}</li>)}</ul></section>
      </main>

      <footer className="landing-footer"><div className="landing-container"><div><Brand /><p>Edificios más organizados, comunidades más felices.</p></div><nav aria-label="Navegación del pie de página">{navigation()}</nav><p>© {new Date().getFullYear()} Enjadmin. Todos los derechos reservados.</p></div></footer>

      <dialog className="landing-dialog" ref={dialogRef} onClick={event => { if (event.target === event.currentTarget) dialogRef.current.close() }} aria-labelledby="landing-dialog-title"><button className="landing-dialog-close" aria-label="Cerrar" onClick={() => dialogRef.current.close()}><X /></button><span className="landing-icon-tile blue"><Building2 /></span><h2 id="landing-dialog-title">{dialogContent?.title}</h2><p>{dialogContent?.description}</p><Link className="landing-button" to="/dashboard">Explorar demostración <ArrowRight size={17} /></Link></dialog>
    </div>
  )
}
