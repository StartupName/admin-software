import './Wallet.css'
// Dashboard components are not modified: they already accept data via props.
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import cardsData from './components/InformationCardsComponent/example_data'

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
            </div>
        </>
    )
}
