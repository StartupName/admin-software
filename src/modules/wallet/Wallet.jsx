import './Wallet.css'
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import cardsData from './components/InformationCardsComponent/example_data'

/*
  Dashboard TopNavigationComponent and InformationCardsComponent are reused as-is.
  They are not modified: organizationName, cardsData, adminName and showDatePicker
  already cover the reusable behavior required by this module.
*/
export default function Wallet(){
    return (
        <>
            <TopNavigationComponent organizationName="Altos del Parque" />
            <InformationCardsComponent
                cardsData={cardsData}
                adminName="Laura"
                showDatePicker={false}
            />
            <div className="wallet-table">
                {/* Put the table componente here */}
                <h1>Cartera</h1>
            </div>
        </>
    )
}
