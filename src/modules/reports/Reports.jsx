import "./Reports.css"
import FrequentReportsComponent from "./components/FrequentReportsComponent/FrequentReportsComponent"
import reports from "./components/FrequentReportsComponent/data/example_data"

function Reports(){
    return (
        <>
            <h1>Reportes</h1>
            <FrequentReportsComponent reports={reports} allReportsTo="/reports" />
        </>
    )
}

export default Reports
