import './Dashboard.css'
import TopNavigationComponent from './components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from './components/InformationCardsComponent/InformationCardsComponent'
import ChartsComponent from './components/ChartsComponent/ChartsComponent'

function DashBoard() {
  return (
    <>
      <TopNavigationComponent organizationName="Altos del Parque" />
      <InformationCardsComponent/>
      <ChartsComponent />
    </>
  )
}

export default DashBoard