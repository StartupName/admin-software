import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight, ChevronDown } from 'lucide-react'
import './NavigationComponent.css'

export default function NavigationComponent({showComponent = true}) {
  if (!showComponent) {
    return (<></>)
  }
  return (
    <nav className="apartments-nav">
      <p className="apartments-nav__info">Mostrando 1 a 8 de 120 unidades</p>

      <div className="apartments-nav__controls">
        <label className="apartments-nav__page-size">
          <select defaultValue="10">
            <option value="10">10 por página</option>
          </select>
          <ChevronDown size={16} />
        </label>

        <div className="apartments-nav__pages">
          <button type="button" className="apartments-nav__btn" aria-label="Primera página">
            <ChevronsLeft size={16} />
          </button>
          <button type="button" className="apartments-nav__btn" aria-label="Página anterior">
            <ChevronLeft size={16} />
          </button>
          <button type="button" className="apartments-nav__btn apartments-nav__btn--active">1</button>
          <button type="button" className="apartments-nav__btn">2</button>
          <button type="button" className="apartments-nav__btn">3</button>
          <button type="button" className="apartments-nav__btn">4</button>
          <button type="button" className="apartments-nav__btn">5</button>
          <button type="button" className="apartments-nav__btn" aria-label="Página siguiente">
            <ChevronRight size={16} />
          </button>
          <button type="button" className="apartments-nav__btn" aria-label="Última página">
            <ChevronsRight size={16} />
          </button>
        </div>
      </div>
    </nav>
  )
}
