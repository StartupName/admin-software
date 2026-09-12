import { useState } from 'react'
import { EllipsisVertical, ReceiptText } from 'lucide-react'
import TableComponent from '../dashboard/components/TableComponent/TableComponent'
import ApartmentStatusDonut from '../dashboard/components/ChartsComponent/graphics/ApartmentStatusDonut'
import '../dashboard/components/ChartsComponent/ChartsComponent.css'
import tableData from './components/TableComponent/example_data.json'
import chartData from './components/ChartComponent/example_data.json'
import './Expenses.css'

// Base components (TableComponent, ApartmentStatusDonut) are reused
// without duplicating them. Only this module file wires data via props.

function formatMoney(value) {
  return `$ ${Number(value).toLocaleString('es-CO')}`
}

const CATEGORY_COLORS = {
  'Servicios': 'expenses-cat--blue',
  'Mantenimiento': 'expenses-cat--amber',
  'Servicios Públicos': 'expenses-cat--green',
  'Suministros': 'expenses-cat--orange',
  'Seguros': 'expenses-cat--purple',
  'Administrativos': 'expenses-cat--gray'
}

export default function Expenses() {
  const [selectedRecord, setSelectedRecord] = useState(null)

  const columns = []

  for (const key of Object.keys(tableData[0])) {
    // 'detalle' is rendered inside the 'concepto' cell, so it gets no column
    if (key === 'detalle') continue
    columns.push({
      key,
      header: key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    })
  }

  function applyRender(field, render) {
    const column = columns.find((object) => object.key === field)
    if (column) column.render = render
  }

  applyRender('concepto', (value, row) => (
    <span className="expenses-concept">
      <strong>{value}</strong>
      {row.detalle && <small>{row.detalle}</small>}
    </span>
  ))

  applyRender('categoria', (value) => (
    <span className={`expenses-pill ${CATEGORY_COLORS[value] ?? ''}`}>{value}</span>
  ))

  applyRender('valor', (value) => (
    <span className="expenses-amount">{formatMoney(value)}</span>
  ))

  applyRender('metodoPago', (value) => (
    <span className="expenses-pill expenses-pill--pay">{value}</span>
  ))

  applyRender('acciones', (value, row) => (
    <div className="expenses-row-actions">
      {Array.isArray(value) && value.includes('opciones') && (
        <button
          type="button"
          className="expenses-more-options"
          aria-label="more options"
          onClick={() => setSelectedRecord(row)}
        >
          <EllipsisVertical size={16} />
        </button>
      )}
    </div>
  ))

  function closeModal() {
    setSelectedRecord(null)
  }

  function handleEdit() {
    // Location: Expenses.jsx — handleEdit
    // Purpose: reserved space for the future Edit action of the selected table record
    // Implementation: add the Edit functionality for `selectedRecord` in this handler
    return
  }

  function handleDelete() {
    // Location: Expenses.jsx — handleDelete
    // Purpose: reserved space for the future Delete action of the selected table record
    // Implementation: add the Delete functionality for `selectedRecord` in this handler
    return
  }

  const chartTotal = chartData.categories.reduce((acc, item) => acc + item.value, 0)

  return (
    <>
      <h1>Gastos</h1>
      <div className="expenses-content">
        <div className="expenses-table">
          <TableComponent
            icon={<ReceiptText />}
            title="Listado de gastos"
            columns={columns}
            data={tableData}
          />
        </div>
        <aside className="expenses-side">
          <ApartmentStatusDonut
            data={chartData.categories}
            title={`${chartData.title} (${chartData.subtitle})`}
            legendPosition="right"
            centerValue={formatMoney(chartTotal)}
            centerLabel={chartData.totalLabel}
            formatValue={formatMoney}
          />
        </aside>
      </div>
      {selectedRecord && (
        <div className="expenses-modal-overlay" onClick={closeModal}>
          <div
            className="expenses-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Record options"
          >
            <button
              type="button"
              className="expenses-modal__btn"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="expenses-modal__btn expenses-modal__btn--danger"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  )
}
