import { useState } from 'react'
import { Search, RotateCcw } from 'lucide-react'
import FilterField from './FilterField'
import exampleData from './data/example_data.json'
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
        <FilterField
          key={filter.id}
          label={filter.label}
          options={filter.options}
          value={values[filter.id] ?? ALL}
          onChange={(next) => handleChange(filter.id, next)}
        />
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
