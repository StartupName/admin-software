import { useState } from 'react'
import { Search, ChevronDown, RotateCcw } from 'lucide-react'
import exampleData from './example_data.json'
import './FiltersComponent.css'

const ALL = 'Todos'

function buildInitialValues(config) {
  const values = { search: config.search?.defaultValue ?? '' }
  for (const filter of config.filters ?? []) {
    values[filter.id] = filter.defaultValue ?? ALL
  }
  return values
}

export default function FiltersComponent({ config = exampleData, onQuery }) {
  const [values, setValues] = useState(() => buildInitialValues(config))

  function handleChange(id, next) {
    setValues((prev) => ({ ...prev, [id]: next }))
  }

  function handleApply() {
    onQuery?.({ ...values, cleared: false })
  }

  function handleClear() {
    const reset = buildInitialValues(config)
    setValues(reset)
    onQuery?.({ ...reset, cleared: true })
  }

  return (
    <section className="apartments-filters" aria-label="Filtros de apartamentos">
      <div className="apartments-filters__field apartments-filters__search">
        <Search size={16} className="apartments-filters__icon" />
        <input
          type="search"
          placeholder={config.search?.placeholder ?? 'Buscar...'}
          aria-label={config.search?.label ?? 'Buscar'}
          value={values.search}
          onChange={(e) => handleChange('search', e.target.value)}
        />
      </div>

      {(config.filters ?? []).map((filter) => (
        <label key={filter.id} className="apartments-filters__field">
          <span className="apartments-filters__label">{filter.label}</span>
          <span className="apartments-filters__select">
            <select
              value={values[filter.id] ?? ALL}
              onChange={(e) => handleChange(filter.id, e.target.value)}
            >
              {filter.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown size={16} />
          </span>
        </label>
      ))}

      <button type="button" className="apartments-filters__apply" onClick={handleApply}>
        Aplicar
      </button>

      <button type="button" className="apartments-filters__clear" onClick={handleClear}>
        <RotateCcw size={14} />
        Limpiar
      </button>
    </section>
  )
}
