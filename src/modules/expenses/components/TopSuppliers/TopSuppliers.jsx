import './TopSuppliers.css'

function formatMoney(value) {
  return `$ ${Number(value).toLocaleString('es-CO')}`
}

// Renders the supplier ranking from props. Values come from test data
// (example_data.json) so the server can replace them without redesign.
export default function TopSuppliers({
  title,
  period,
  suppliers = [],
  onViewAll = () => alert('Showing list of suppliers.')
}) {
  return (
    <section className="top-suppliers" aria-label={title}>
      <h3 className="top-suppliers__title">
        {title} <span className="top-suppliers__period">({period})</span>
      </h3>
      <ul className="top-suppliers__list">
        {suppliers.map((supplier) => (
          <li key={supplier.id} className="top-suppliers__item">
            <span className="top-suppliers__name">{supplier.name}</span>
            <span className="top-suppliers__amount">{formatMoney(supplier.amount)}</span>
          </li>
        ))}
      </ul>
      <button type="button" className="top-suppliers__view-all" onClick={onViewAll}>
        Ver todos los proveedores &gt;
      </button>
    </section>
  )
}
