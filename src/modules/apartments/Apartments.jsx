import { useState } from 'react'
import { Building2, EllipsisVertical } from 'lucide-react'
import './Apartments.css'
import NavigationComponent from './components/NavigationComponent/NavigationComponent'
import SummaryComponent from './components/SummaryComponent/SummaryComponent'
import TableComponent from '../dashboard/components/TableComponent/TableComponent'
import exampleData from './components/TableComponent/data/example_data.json'

function Apartments() {
  const [selectedRecord, setSelectedRecord] = useState(null)

  const columns = []

  for (let element of Object.keys(exampleData[0])) {
    columns.push({
      key: element,
      header: element.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    })
  }

  columns.map((object) => {
    if (object.key === 'estado') {
      object.render = (value) => (
        <span
          className={`
            ${
              value === 'Al día'
                ? 'uptodate'
                : value === "Pendiente"
                  ? 'pending'
                  : 'delay'
            }
          `}
        >
          {value}
        </span>
      )
    }
  })

  columns.map((object) => {
    if (object.key === 'acciones') {
      object.render = (value, row) => (
        <div className="apartments-row-actions">
          {Array.isArray(value) && value.includes('opciones') && (
            <button
              type="button"
              className="apartments-more-options"
              aria-label="more options"
              onClick={() => setSelectedRecord(row)}
            >
              <EllipsisVertical size={16} />
            </button>
          )}
        </div>
      )
    }
  })

  function closeModal() {
    setSelectedRecord(null)
  }

  function handleEdit() {
    // Location: Apartments.jsx — handleEdit
    // Purpose: reserved space for the future Edit action of the selected table record
    // Implementation: add the Edit functionality for `selectedRecord` in this handler
    return
  }

  function handleDelete() {
    // Location: Apartments.jsx — handleDelete
    // Purpose: reserved space for the future Delete action of the selected table record
    // Implementation: add the Delete functionality for `selectedRecord` in this handler
    return
  }

  return (
    <>
      <SummaryComponent values={[120, 78, 28, 14, 92]} />
      <TableComponent
        icon={<Building2 />}
        title={"Apartamentos"}
        columns={columns}
        data={exampleData}
      />
      <NavigationComponent />
      {selectedRecord && (
        <div className="apartments-modal-overlay" onClick={closeModal}>
          <div
            className="apartments-modal"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Record options"
          >
            <button
              type="button"
              className="apartments-modal__btn"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              type="button"
              className="apartments-modal__btn apartments-modal__btn--danger"
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

export default Apartments
