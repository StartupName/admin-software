import { useState } from 'react'
import { ShoppingBag, ArrowDownToLine, EllipsisVertical, Eye } from 'lucide-react'
import './Expenses.css'
// Dashboard TableComponent and ApartmentStatusDonut are reused here (not duplicated).
import TableComponent from '../dashboard/components/TableComponent/TableComponent'
// Reused Dashboard donut — not ChartsComponent. ChartsComponent was not modified:
// the issue asks for the donut chart only ("Table and donut chart").
import ApartmentStatusDonut from '../dashboard/components/ChartsComponent/graphics/ApartmentStatusDonut'
import tableData from './components/TableComponent/example_data.json'
import chartData from './components/ChartComponent/example_data.json'

export default function Expenses(){
    const [selectedRecord, setSelectedRecord] = useState(null)

    function download(){
        alert('Downloading file...')
    }

    const columns = []

    for (let element of Object.keys(tableData[0])){
        columns.push({
            key: element,
            header: element.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        })
    }

    columns.map((object) => {
        if (object.key === 'method') {
            object.render = (value) => (
                <span
                    className={
                        value === 'Transfer'
                            ? 'transfer'
                            : 'cash'
                    }
                >
                    {value}
                </span>
            )
        }
    })

    columns.map((object) => {
        if (object.key === 'amount') {
            object.render = (value) => (
                `$ ${Number(value).toLocaleString('en-US')}`
            )
        }
    })

    columns.map((object) => {
        if (object.key === 'receipt') {
            object.render = (value) => (
                <span className="layout">
                    {value}
                    <ArrowDownToLine
                        size={20}
                        className="expenses-download-icon"
                        onClick={download}
                    />
                </span>
            )
        }
    })

    columns.map((object) => {
        if (object.key === 'actions') {
            object.render = (value, row) => (
                <div className="expenses-row-actions">
                    {Array.isArray(value) && value.includes('view') && (
                        <button
                            type="button"
                            className="expenses-eye"
                            aria-label="View more"
                        >
                            <Eye size={16} />
                        </button>
                    )}
                    {Array.isArray(value) && value.includes('options') && (
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
            )
        }
    })

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

    return (
        <>
            <div className="expenses-table">
                <TableComponent
                    icon={<ShoppingBag />}
                    title={"Expense list"}
                    columns={columns}
                    data={tableData}
                />
                <ApartmentStatusDonut
                    data={chartData.data}
                    title={chartData.title}
                    legendPosition={chartData.legendPosition}
                    centerValue={chartData.centerValue}
                    centerLabel={chartData.centerLabel}
                />
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
