import './Wallet.css'
// Dashboard components are not modified: they already accept data via props.
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import cardsData from './components/InformationCardsComponent/example_data'
import navData from './components/topNavigationComponent/example_data.json'

export default function Wallet(){
    return (
        <>
            <TopNavigationComponent
                organizationName={navData.organizationName}
                notificationCount={navData.notificationCount}
            />
            <InformationCardsComponent
                cardsData={cardsData}
                adminName={navData.adminName}
                showDatePicker={false}
            />
            <div className="wallet-table">
                {/* Put the table componente here */}
            </div>
        </>
    )
}
