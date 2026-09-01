import './Dashboard.css'

import TopNavigationComponent from './components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from './components/InformationCardsComponent/InformationCardsComponent'
function DashBoard() {
  return (
    <>
      <TopNavigationComponent organizationName="Altos del Parque" />
      <InformationCardsComponent/>
    </>
  )

}
export default DashBoard