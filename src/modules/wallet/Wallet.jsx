import { useState } from 'react'
import {
  Wallet as WalletIcon,
  EllipsisVertical,
  Eye
} from 'lucide-react'
import './Wallet.css'
import TableComponent from '../dashboard/components/TableComponent/TableComponent'
import exampleData from './components/TableComponent/example_data.json'

export default function Wallet(){
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
    changeStyle(columns, 'apartamento', () => 'apartmentTitleStyle')

    columns.map((object) => {
        if (object.key === 'acciones') {
            object.render = (value, row) => (
                <div className="wallet-row-actions">
                    {Array.isArray(value) && value.includes('ver') && (
                        <button
                            type="button"
                            className="wallet-eye"
                            aria-label="View more"
                        >
                            <Eye size={16} />
                        </button>
                    )}
                    {Array.isArray(value) && value.includes('opciones') && (
                        <button
                            type="button"
                            className="wallet-more-options"
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
        // Location: Wallet.jsx — handleEdit
        // Purpose: reserved space for the future Edit action of the selected table record
        // Implementation: add the Edit functionality for `selectedRecord` in this handler
        return
    }

    function handleDelete() {
        // Location: Wallet.jsx — handleDelete
        // Purpose: reserved space for the future Delete action of the selected table record
        // Implementation: add the Delete functionality for `selectedRecord` in this handler
        return
    }

    return (
        <>
            <div className="wallet-table">
                <TableComponent
                    icon={<WalletIcon />}
                    title={"Cartera"}
                    columns={columns}
                    data={exampleData}
                />
            </div>
            {selectedRecord && (
                <div className="wallet-modal-overlay" onClick={closeModal}>
                    <div
                        className="wallet-modal"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Record options"
                    >
                        <button
                            type="button"
                            className="wallet-modal__btn"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="wallet-modal__btn wallet-modal__btn--danger"
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
