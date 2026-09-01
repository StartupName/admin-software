import IncomeChart from './IncomeChart'
import ApartmentStatusDonut from './ApartmentStatusDonut'
import ThirdChart from './ThirdChart'

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
      />

      <ThirdChart data={thirdData} />
    </div>
  )
}
