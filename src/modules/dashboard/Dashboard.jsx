import './Dashboard.css'
import TableComponent from './components/TableComponent/TableComponent'
import QuickActionsComponent from './components/QuickActionsComponent/QuickActionsComponent'
import { exampleQuickActions } from './components/QuickActionsComponent/example_data'
import TopNavigationComponent from './components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from './components/InformationCardsComponent/InformationCardsComponent'
import ChartsComponent from './components/ChartsComponent/ChartsComponent'
import defaultData from './components/TableComponent/data/data_table.json';

import { ArrowDownToLine, FileText } from 'lucide-react'

import './Dashboard.css'   // ← eliminar

function DashBoard() {
  function download(){
    alert('Descargando archivo...')
  }

   const columns = []

  for (let element of Object.keys(defaultData[0])){
    columns.push({
      key: element,
      header: element.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    })
  }

  columns.map((object) => {
    if (object.key === 'metodo') {
      object.render = (value) => (
        <span
          className={`
            ${
              value === 'Transferencia' 
                ? 'transfer'
                : 'cash'
            }
          `}>
          {value}
        </span>
      )
    }
  })

  columns.map((object) => {
    if (object.key === 'comprobante') {
      object.render = (value) => (
        <>
          <span className={`layout`}>
            {value}
            <ArrowDownToLine
              size={20}
              color = "blue"
              cursor="pointer"
              onClick={download}
            />
          </span>
        </>
      )
    }
  })
  return (
    <>
      <TopNavigationComponent organizationName="Altos del Parque" />
      <InformationCardsComponent/>
      <ChartsComponent />
      <div className="dashboard_table">
        <TableComponent
          icon = {<FileText/>}
          title= {"Último pagos registrados"}
          columns= {columns}
          data= {defaultData}
          className= "table"
          showNavigation= {false}
        />
        <QuickActionsComponent
          actions={exampleQuickActions}
          className="quick-actions"
        />
      </div>
    </>
  )
}

export default DashBoard