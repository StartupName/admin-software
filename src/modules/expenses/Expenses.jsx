import './Expenses.css'
import TopSuppliers from './components/TopSuppliers/TopSuppliers'
import topSuppliersData from './components/TopSuppliers/example_data.json'

export default function Expenses() {
  return (
    <>
      <div className="expenses-table">
        {/* Put the table component here */}
        <TopSuppliers
          title={topSuppliersData.title}
          yearLabel={topSuppliersData.yearLabel}
          viewAllLabel={topSuppliersData.viewAllLabel}
          suppliers={topSuppliersData.suppliers}
        />
      </div>
    </>
  )
}
