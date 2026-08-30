import './topNavigationComponent.css' // importa los estilos de la barra
import { FiSearch, FiBell } from 'react-icons/fi' // Fi = Feather Icons: lupa y campana
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2' // icono de edificio para organización

// Componente de navegación superior 
function TopNavigationComponent({ organizationName = "Altos del Parque" }) {
  return (
    <div className="topBar"> {/* contenedor flex principal alineado a la derecha */}
      
      {/* Caja de búsqueda global */}
      <div className="searchBox">
        <FiSearch /> {/* icono lupa */}
        <input placeholder="Buscar apartamento, residente, pago..." /> {/* campo de búsqueda */}
      </div>

      {/* Botón de notificaciones con badge */}
      <button className="notifBtn">
        <FiBell /> {/* icono campana */}
        <span className="badge">3</span> {/* bolita roja con contador */}
      </button>

      {/* Selector de organización/edificio */}
      <div className="orgSelector">
        <HiOutlineBuildingOffice2 /> {/* icono edificio */}
        <span>{organizationName}</span> {/* nombre dinámico, no hardcodeado */}
        <span>▼</span> {/* flecha dropdown */}
      </div>

    </div>
  )
}

export default TopNavigationComponent // lo exporta para usar en App.jsx