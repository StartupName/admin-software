import { useState } from 'react'
import { Search, RotateCcw, ChevronDown } from 'lucide-react'
import './FiltersComponent.css'

const ALL = 'Todos'

export default function FiltersComponent({
  financialStatuses = [],
  floors = [],
  onQuery,
}) {
  const [search, setSearch] = useState('')
  const [financialStatus, setFinancialStatus] = useState(ALL)
  const [floor, setFloor] = useState(ALL)

  function applyFilters() {
    onQuery?.({ search, financialStatus, floor })
  }

  function clearFilters() {
    setSearch('')
    setFinancialStatus(ALL)
    setFloor(ALL)
    onQuery?.({ cleared: true })
  }

  return (
    <section className="apartments-filters">
      <div className="apartments-filters__bar">
        <label className="apartments-filters__search">
          <Search size={16} />
          <input
            type="search"
            placeholder="Buscar..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>

        <label className="apartments-filters__field">
          <span>Estado financiero</span>
          <span className="apartments-filters__select">
            <select
              value={financialStatus}
              onChange={(event) => setFinancialStatus(event.target.value)}
            >
              <option value={ALL}>{ALL}</option>
              {financialStatuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <ChevronDown size={16} />
          </span>
        </label>

        <label className="apartments-filters__field">
          <span>Piso</span>
          <span className="apartments-filters__select">
            <select
              value={floor}
              onChange={(event) => setFloor(event.target.value)}
            >
              <option value={ALL}>{ALL}</option>
              {floors.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            <ChevronDown size={16} />
          </span>
        </label>

        <div className="apartments-filters__actions">
          <button type="button" className="apartments-filters__apply" onClick={applyFilters}>
            Aplicar
          </button>
          <button type="button" className="apartments-filters__clear" onClick={clearFilters}>
            <RotateCcw size={16} />
            Limpiar
          </button>
        </div>
      </div>
    </section>
  )
}
