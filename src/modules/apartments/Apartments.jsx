import { useState } from 'react'
import { Building2, Eye, EllipsisVertical } from 'lucide-react'
import './Apartments.css'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import TableComponent, { StatusBadge } from '../dashboard/components/TableComponent/TableComponent'
import apartmentsData from './components/TableComponent/data/example_data.json'

const columnHeaders = {
  apartamento: 'Apartamento',
  piso: 'Piso',
  propietario: 'Propietario',
  residenteActual: 'Residente actual',
  estado: 'Estado',
  saldoPendiente: 'Saldo pendiente',
  ultimoPago: 'Último pago',
  acciones: 'Acciones',
}

function formatBalance(value) {
  const amount = Number(value) || 0
  return `$ ${amount.toLocaleString('es-CO')}`
}

function Apartments() {
  const [openRow, setOpenRow] = useState(null)

  function closeOptions() {
    setOpenRow(null)
  }

  const columns = []

  for (let element of Object.keys(apartmentsData[0])) {
    columns.push({
      key: element,
      header: columnHeaders[element]
        || element.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
    })
  }

  columns.map((object) => {
    if (object.key === 'apartamento') {
      object.render = (value) => (
        <span className="apartments-unit">{value}</span>
      )
    }
  })

  columns.map((object) => {
    if (object.key === 'estado') {
      object.render = (value) => (
        <StatusBadge
          label={value}
          variant={
            value === 'Al día'
              ? 'success'
              : value === 'Pendiente'
                ? 'warning'
                : 'danger'
          }
        />
      )
    }
  })

  columns.map((object) => {
    if (object.key === 'saldoPendiente') {
      object.render = (value) => (
        <span className={Number(value) > 0 ? 'apartments-balance apartments-balance--due' : 'apartments-balance'}>
          {formatBalance(value)}
        </span>
      )
    }
  })

  columns.map((object) => {
    if (object.key === 'acciones') {
      object.render = (value, row, rowIndex) => (
        <div className="apartments-actions">
          {value?.includes('ver') && (
            <button type="button" className="apartments-actions__btn" aria-label="Ver">
              <Eye size={16} />
            </button>
          )}
          {value?.includes('opciones') && (
            <button
              type="button"
              className="apartments-actions__btn"
              aria-label="Más opciones"
              onClick={() => setOpenRow(rowIndex)}
            >
              <EllipsisVertical size={16} />
            </button>
          )}
        </div>
      )
    }
  })

  return (
    <>
      <TableComponent
        icon={<Building2 />}
        title="Apartamentos"
        columns={columns}
        data={apartmentsData}
      />
      <NavigationComponent />

      {openRow != null && (
        <div className="apartments-modal-overlay" onClick={closeOptions}>
          <div
            className="apartments-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="apartments-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p id="apartments-modal-title" className="apartments-modal__title">Opciones</p>

            <button
              type="button"
              className="apartments-modal__action"
              onClick={() => {
                // Location: Apartments.jsx — Edit action in the row options modal.
                // Purpose: reserved space for the future Edit flow of the selected apartment.
                // Implementation: add the edit handler here (open form / call API). No business logic in this prototype.
              }}
            >
              Edit
            </button>

            <button
              type="button"
              className="apartments-modal__action apartments-modal__action--danger"
              onClick={() => {
                // Location: Apartments.jsx — Delete action in the row options modal.
                // Purpose: reserved space for the future Delete flow of the selected apartment.
                // Implementation: add the delete handler here (confirm / call API). No business logic in this prototype.
              }}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Apartments
