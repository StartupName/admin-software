import './Expenses.css'
import TopSuppliers from './components/TopSuppliers/TopSuppliers'
import suppliersData from './components/TopSuppliers/example_data.json'

export default function Expenses(){
    return (
        <>
            <div className="expenses-table">
                {/* Put the table componente here */}
                <h1>Gastos</h1>
            </div>
            <TopSuppliers
                title={suppliersData.title}
                period={suppliersData.period}
                suppliers={suppliersData.suppliers}
            />
        </>
    )
}
