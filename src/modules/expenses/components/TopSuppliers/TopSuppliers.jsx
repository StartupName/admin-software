import './TopSuppliers.css'

function formatAmount(amount) {
  const formatted = Number(amount).toLocaleString('de-DE')
  return `$ ${formatted}`
}

export default function TopSuppliers({
  title = 'Top 5 suppliers',
  yearLabel = 'Year',
  viewAllLabel = 'View all suppliers',
  suppliers = [],
}) {
  function handleViewAll() {
    // Reserved for future navigation to the full suppliers list.
    alert('Showing list of suppliers.')
  }

  return (
    <section className="top-suppliers" aria-label={title}>
      <h2 className="top-suppliers__title">
        {title}
        <span className="top-suppliers__year">({yearLabel})</span>
      </h2>

      <ul className="top-suppliers__list">
        {suppliers.map((supplier) => (
          <li key={supplier.id ?? supplier.name} className="top-suppliers__row">
            <span className="top-suppliers__name">{supplier.name}</span>
            <span className="top-suppliers__amount">
              {formatAmount(supplier.amount)}
            </span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        className="top-suppliers__view-all"
        onClick={handleViewAll}
      >
        {viewAllLabel} &gt;
      </button>
    </section>
  )
}
