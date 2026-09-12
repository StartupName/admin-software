import "./Reports.css"
import { DollarSign, Wallet, AlertTriangle, ShoppingCart, FileText, Building2 } from 'lucide-react'
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
import navData from './component/topNavigationComponent/example_data.json'
import cardsJson from './component/InformationCardsComponent/example_data.json'
import actionsJson from './component/QuickActionsComponent/example_data.json'

// Resolve serializable icon names here so the same props can later come from an API.
const icons = { DollarSign, Wallet, AlertTriangle, ShoppingCart, FileText, Building2 }
const cardsData = cardsJson.map((card) => ({ ...card, icon: icons[card.icon] ?? FileText }))
const actions = actionsJson.map((action) => ({ ...action, icon: icons[action.icon] ?? FileText }))

function Reports(){
    return (
        <>
            <TopNavigationComponent
                organizationName={navData.organizationName}
                notificationCount={navData.notificationCount}
            />
            <h1>Reportes</h1>
            <InformationCardsComponent
                cardsData={cardsData}
                adminName={navData.adminName}
                showDatePicker={false}
            />
            <div className="reports-content">
                {/* The Reports table can share this container during integration. */}
                <QuickActionsComponent actions={actions} />
            </div>
        </>
    )
}

export default Reports
