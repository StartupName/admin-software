import { useState } from 'react'
import { 
  Building2,
  EllipsisVertical,
  Eye
} from 'lucide-react'
import './Apartments.css'
import NavigationComponent from '../../common/components/NavigationComponent/NavigationComponent'
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

  function money_changer(value, convert = false, type = 'es-CO'){
    if (!convert) {
      return value
    }
    return `$ ${value.toLocaleString(type)}`
  }


  function changeStyle(list, field, exp, isMoney) {
    list.map((object) => {
      if (object.key === field) {
        object.render = (value) => (
          <span
            className={exp(value)}
          >
            {money_changer(value, isMoney)}
          </span>
        )
      }
    })
  }

  changeStyle(columns, 'estado', (value)=>
    value === 'Al día'
      ? 'uptodate'
      : value === "Pendiente"
        ? 'pending'
        : 'delay'  
  )
  changeStyle(columns, 'saldoPendiente', (value)=>
    value === 0
      ? 'debt-free'
      : value > 0 && value <= 35000
        ? 'debt-pending'
        : 'indebted',
        true
  )
  changeStyle(columns, 'apartamento', (value) => 'apartmentTitleStyle'
  )



  columns.map((object) => {
    if (object.key === 'acciones') {
      object.render = (value, row) => (
        <div className="apartments-row-actions">
          {Array.isArray(value) && value.includes('ver') && (
            <button
              type="button"
              className="apartments-eye"
              aria-label="View more"
            >
              <Eye size={16} />
            </button>
          )}
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
      <div className="apartments_table">
        <TableComponent
          icon={<Building2 />}
          title={"Apartamentos"}
          columns={columns}
          data={exampleData}
        />
      </div>
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
