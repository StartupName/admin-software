import './topNavigationComponent.css'
import { FiSearch, FiBell } from 'react-icons/fi'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'

function TopNavigationComponent({ organizationName = "Altos del Parque" }) {
  return (
    <div className="topBar">
      <div className="searchBox">
        <FiSearch />
        <input type="search" placeholder="Buscar apartamento, residente, pago..." />
      </div>
      <button className="notifBtn">
        <FiBell />
        <span className="badge">3</span>
      </button>
      <div className="orgSelector">
        <HiOutlineBuildingOffice2 />
        <span>{organizationName}</span>
        <span>▼</span>
      </div>
    </div>
  )
}

export default TopNavigationComponent
