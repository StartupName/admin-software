import IncomeChart from './graphics/IncomeChart'
import ApartmentStatusDonut from './graphics/ApartmentStatusDonut'
import ThirdChart from './graphics/ThirdChart'

import incomeData from './data/incomeData.json'
import statusData from './data/statusData.json'
import thirdData from './data/thirdData.json'

import './ChartsComponent.css'

export default function ChartsComponent() {
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
