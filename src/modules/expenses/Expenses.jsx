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

// Spanish headers (payments key pattern). Auto-capitalize would drop accents
// and show "Metodo" instead of prototype "Método de pago".
const HEADER_LABELS = {
    fecha: 'Fecha',
    concepto: 'Concepto',
    categoria: 'Categoría',
    proveedor: 'Proveedor',
    comprobante: 'Comprobante',
    valor: 'Valor',
    metodo: 'Método de pago',
    acciones: 'Acciones',
}

// Distinct badge classes per payment method (prototype pills).
const METHOD_CLASS = {
    Transferencia: 'method-transferencia',
    'Débito automático': 'method-debito-automatico',
    'Tarjeta débito': 'method-tarjeta-debito',
    Efectivo: 'method-efectivo',
}

function formatCurrency(value) {
    return `$ ${Number(value).toLocaleString('es-CO')}`
}

export default function Expenses(){
    const [selectedRecord, setSelectedRecord] = useState(null)

    function download(){
        alert('Descargando archivo...')
    }

    const columns = []

    // Skip `detalle`: prototype shows it under concepto (title + grey subtitle),
    // not as its own column.
    for (let element of Object.keys(tableData[0])){
        if (element === 'detalle') continue
        columns.push({
            key: element,
            header: HEADER_LABELS[element]
                ?? element.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        })
    }

    columns.forEach((object) => {
        if (object.key === 'concepto') {
            // Prototype: concepto title + grey detalle in the same cell.
            object.render = (value, row) => (
                <div className="expenses-concepto">
                    <span className="expenses-concepto__title">{value}</span>
                    {row?.detalle ? (
                        <span className="expenses-concepto__detalle">{row.detalle}</span>
                    ) : null}
                </div>
            )
        }

        if (object.key === 'metodo') {
            object.render = (value) => (
                <span className={METHOD_CLASS[value] ?? 'method-default'}>
                    {value}
                </span>
            )
        }

        if (object.key === 'valor') {
            object.render = (value) => formatCurrency(value)
        }

        if (object.key === 'comprobante') {
            // No invoice → do not show download icon (null / empty / missing).
            object.render = (value) => (
                <span className="layout">
                    {value ? value : '—'}
                    {value ? (
                        <ArrowDownToLine
                            size={20}
                            className="expenses-download-icon"
                            onClick={download}
                        />
                    ) : null}
                </span>
            )
        }

        if (object.key === 'acciones') {
            object.render = (value, row) => (
                <div className="expenses-row-actions">
                    {Array.isArray(value) && value.includes('ver') && (
                        <button
                            type="button"
                            className="expenses-eye"
                            aria-label="Ver más"
                        >
                            <Eye size={16} />
                        </button>
                    )}
                    {Array.isArray(value) && value.includes('opciones') && (
                        <button
                            type="button"
                            className="expenses-more-options"
                            aria-label="Más opciones"
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
                    title={"Listado de gastos"}
                    columns={columns}
                    data={tableData}
                />
                <ApartmentStatusDonut
                    data={chartData.data}
                    title={chartData.title}
                    legendPosition={chartData.legendPosition}
                    centerValue={chartData.centerValue}
                    centerLabel={chartData.centerLabel}
                    valueFormatter={formatCurrency}
                />
            </div>
            {selectedRecord && (
                <div className="expenses-modal-overlay" onClick={closeModal}>
                    <div
                        className="expenses-modal"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Opciones del registro"
                    >
                        <button
                            type="button"
                            className="expenses-modal__btn"
                            onClick={handleEdit}
                        >
                            Editar
                        </button>
                        <button
                            type="button"
                            className="expenses-modal__btn expenses-modal__btn--danger"
                            onClick={handleDelete}
                        >
                            Eliminar
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
