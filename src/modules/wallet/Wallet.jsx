import './Wallet.css'
import ApartmentStatusDonut from '../dashboard/components/ChartsComponent/graphics/ApartmentStatusDonut'
import chartData from '../payments/component/ChartComponent/example_data.json'

export default function Wallet(){
    return (
        <div className="wallet">
            <div className="wallet-table">
                <h1>Cartera</h1>
                <ApartmentStatusDonut data={chartData} legendPosition="right" title="Distribución de cartera" centerLabel="Total" />
            </div>
        </div>
    )
}
