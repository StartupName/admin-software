import { Building2, Plus } from 'lucide-react'
import './SummaryComponent.css'

export default function SummaryComponent({ values = [] }) {
  const [total, onTime, pending, overdue, collection] = values

  return (
    <section className="apartments-summary">
      <header className="apartments-summary__header">
        <div>
          <h1 className="apartments-summary__title">Apartamentos</h1>
          <p className="apartments-summary__subtitle">
            Consulta y administra las unidades del edificio.
          </p>
        </div>
        <button
          type="button"
          className="apartments-summary__register"
          onClick={() => console.log('Register')} 
        >
          <Plus size={18} strokeWidth={2.5} />
          Registrar apartamento
        </button>
      </header>

      <div className="apartments-summary__card">
        <div className="apartments-summary__lead">
          <div className="apartments-summary__icon">
            <Building2 size={28} strokeWidth={1.75} />
          </div>
          <span className="apartments-summary__lead-text">Resumen de unidades</span>
        </div>

        <div className="apartments-summary__stat">
          <span className="apartments-summary__value apartments-summary__value--blue">{total}</span>
          <span className="apartments-summary__label">Total unidades</span>
        </div>

        <div className="apartments-summary__stat">
          <span className="apartments-summary__value apartments-summary__value--green">{onTime}</span>
          <span className="apartments-summary__label">
            <span className="apartments-summary__dot apartments-summary__dot--green" />
            Al día
          </span>
        </div>

        <div className="apartments-summary__stat">
          <span className="apartments-summary__value apartments-summary__value--amber">{pending}</span>
          <span className="apartments-summary__label">
            <span className="apartments-summary__dot apartments-summary__dot--amber" />
            Pendientes
          </span>
        </div>

        <div className="apartments-summary__stat">
          <span className="apartments-summary__value apartments-summary__value--red">{overdue}</span>
          <span className="apartments-summary__label">
            <span className="apartments-summary__dot apartments-summary__dot--red" />
            En mora
          </span>
        </div>

        <div className="apartments-summary__stat">
          <span className="apartments-summary__value apartments-summary__value--blue">
            {collection != null && collection !== '' ? `${collection}%` : ''}
          </span>
          <span className="apartments-summary__label">Índice de recaudo</span>
        </div>
      </div>
    </section>
  )
}
