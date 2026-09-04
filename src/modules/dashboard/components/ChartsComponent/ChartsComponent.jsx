import IncomeChart from './graphics/IncomeChart'
import ApartmentStatusDonut from './graphics/ApartmentStatusDonut'
import ThirdChart from './graphics/ThirdChart'

import defaultIncomeData from './data/incomeData.json'
import defaultStatusData from './data/statusData.json'
import defaultThirdData from './data/thirdData.json'

import './ChartsComponent.css'

// Reuse: ChartsComponent now accepts data via props for reuse in other modules
// (e.g., payments/component/ChartComponent/example_data.json). Falls back to
// dashboard default JSON to preserve existing behavior without redesign for server data
export default function ChartsComponent({
  incomeData = defaultIncomeData,
  statusData = defaultStatusData,
  thirdData = defaultThirdData,
}) {
  return (
    <div className="chartsGrid">
      <IncomeChart data={incomeData} />

      <ApartmentStatusDonut
        data={statusData}
        legendPosition="right"
        title="Estado de apartamentos"
      />

      <ThirdChart data={thirdData} />
    </div>
  )
}
