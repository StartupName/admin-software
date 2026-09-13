import { useId } from 'react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import './FrequentReportsComponent.css'

// Each report supplies a unique id, title, description and icon component.
// onGenerate receives the complete report; the parent owns the action.
export default function FrequentReportsComponent({
  reports = [],
  title = 'Reportes frecuentes',
  allReportsLabel = 'Ver todos los reportes',
  allReportsTo,
  onViewAll,
  onGenerate,
}) {
  const titleId = useId()

  return (
    <section className="frequent-reports" aria-labelledby={titleId}>
      <header className="frequent-reports__header">
        <h2 id={titleId} className="frequent-reports__title">{title}</h2>
        {allReportsTo ? (
          <Link className="frequent-reports__view-all" to={allReportsTo}>
            {allReportsLabel}
          </Link>
        ) : (
          <button
            type="button"
            className="frequent-reports__view-all"
            onClick={onViewAll}
            disabled={!onViewAll}
          >
            {allReportsLabel}
          </button>
        )}
      </header>

      <div className="frequent-reports__grid">
        {reports.map((report) => {
          const Icon = report.icon

          return (
            <article key={report.id} className="frequent-reports__card">
              <span
                className="frequent-reports__icon"
                style={{ color: report.color, backgroundColor: report.circleColor }}
                aria-hidden="true"
              >
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3 className="frequent-reports__card-title">{report.title}</h3>
              <p className="frequent-reports__description">{report.description}</p>
              <button
                type="button"
                className="frequent-reports__generate"
                onClick={() => onGenerate?.(report)}
                disabled={!onGenerate}
                aria-label={`Generar ${report.title}`}
              >
                <span>Generar</span>
                <ChevronDown size={16} aria-hidden="true" />
              </button>
            </article>
          )
        })}
      </div>
    </section>
  )
}
