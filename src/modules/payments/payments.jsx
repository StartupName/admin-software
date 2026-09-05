import exampleData from './example_data.json'
import ApartmentStatusDonut from '../dashboard/components/ChartsComponent/graphics/ApartmentStatusDonut'
export default function Payments(){
    return (
        <>
            <div className="payments-table">
                {/* Put the table componente here */}
                <h1>Pagos</h1>

                <ApartmentStatusDonut
                    data={exampleData}
                    legendPosition="right"
                    title="Estado de apartamentos"
                />
            </div>
        </>
    )
}