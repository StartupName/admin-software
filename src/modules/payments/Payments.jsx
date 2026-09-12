import { useState } from 'react'
import {
  DollarSign,
  Calendar,
  CreditCard,
  Clock,
  FileText,
  Files,
  FileCheck,
  Wallet,
  ArrowDownToLine,
  EllipsisVertical,
  Eye,
} from 'lucide-react'
import './Payments.css'
// Reused Dashboard components are not modified: they already accept data via props.
// This JSON can later be replaced by server data without redesigning those components.
// Dashboard TableComponent and ApartmentStatusDonut are reused here (not duplicated).
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
import TableComponent from '../dashboard/components/TableComponent/TableComponent'
// Reused Dashboard donut only — not the full ChartsComponent grid.
import ApartmentStatusDonut from '../dashboard/components/ChartsComponent/graphics/ApartmentStatusDonut'
import navData from './components/topNavigationComponent/example_data.json'
import cardsJson from './components/InformationCardsComponent/example_data.json'
import actionsJson from './components/QuickActionsComponent/example_data.json'
import tableData from './components/TableComponent/example_data.json'
import chartData from './components/ChartComponent/example_data.json'

const cardIcons = {
  DollarSign,
  Calendar,
  CreditCard,
  Clock,
}

const actionIcons = {
  FileText,
  Files,
  FileCheck,
  Wallet,
}

const cardsData = cardsJson.map((card) => ({
  ...card,
  icon: cardIcons[card.icon],
}))

const quickActions = actionsJson.map((action) => ({
  ...action,
  icon: actionIcons[action.icon],
}))

export default function Payments(){
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
                    {value ? value : '—'}
                    {value ? (
                        <ArrowDownToLine
                            size={20}
                            className="payments-download-icon"
                            onClick={download}
                        />
                    ) : null}
                </span>
            )
        }
    })

    columns.map((object) => {
        if (object.key === 'actions') {
            object.render = (value, row) => (
                <div className="payments-row-actions">
                    {Array.isArray(value) && value.includes('view') && (
                        <button
                            type="button"
                            className="payments-eye"
                            aria-label="View more"
                        >
                            <Eye size={16} />
                        </button>
                    )}
                    {Array.isArray(value) && value.includes('options') && (
                        <button
                            type="button"
                            className="payments-more-options"
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
        // Location: Payments.jsx — handleEdit
        // Purpose: reserved space for the future Edit action of the selected table record
        // Implementation: add the Edit functionality for `selectedRecord` in this handler
        return
    }

    function handleDelete() {
        // Location: Payments.jsx — handleDelete
        // Purpose: reserved space for the future Delete action of the selected table record
        // Implementation: add the Delete functionality for `selectedRecord` in this handler
        return
    }

    return (
        <>
            <TopNavigationComponent
                organizationName={navData.organizationName}
                notificationCount={navData.notificationCount}
            />
            <InformationCardsComponent
                cardsData={cardsData}
                adminName={navData.adminName}
                showDatePicker={false}
            />
            <div className="payments-body">
                <div className="payments-table">
                    <TableComponent
                        icon={<FileText />}
                        title={"Payment history"}
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
                <QuickActionsComponent actions={quickActions} className="payments-quick-actions" />
            </div>
            {selectedRecord && (
                <div className="payments-modal-overlay" onClick={closeModal}>
                    <div
                        className="payments-modal"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Record options"
                    >
                        <button
                            type="button"
                            className="payments-modal__btn"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            className="payments-modal__btn payments-modal__btn--danger"
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
