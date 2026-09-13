import './Wallet.css'
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import cardsData, { adminName, organizationName, notificationCount } from './component/InformationCardsComponent/example_data.js'

export default function Wallet(){
    return (
        <>
            <TopNavigationComponent organizationName={organizationName} notificationCount={notificationCount} />
            <InformationCardsComponent cardsData={cardsData} adminName={adminName} showDatePicker={false} />
            <div className="wallet-table">
                {/* Put the table componente here */}
                <h1>Cartera</h1>
            </div>
        </>
    )
}
