import {
  DollarSign,
  Calendar,
  CreditCard,
  Clock,
  FileText,
  Files,
  FileCheck,
  Wallet,
} from 'lucide-react'
import './Payments.css'
// Reused Dashboard components are not modified: they already accept data via props.
// This JSON can later be replaced by server data without redesigning those components.
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
import navData from './components/topNavigationComponent/example_data.json'
import cardsJson from './components/InformationCardsComponent/example_data.json'
import actionsJson from './components/QuickActionsComponent/example_data.json'

const cardIcons = {
  DollarSign,
  Calendar,
  CreditCard,
  Clock,
}

const actionIcons = {
  FileText,
  Files,
  FileCheck,
  Wallet,
}

const cardsData = cardsJson.map((card) => ({
  ...card,
  icon: cardIcons[card.icon],
}))

const quickActions = actionsJson.map((action) => ({
  ...action,
  icon: actionIcons[action.icon],
}))

export default function Payments(){
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
            <div className="payments-table">
                {/* Put the table componente here */}
                <QuickActionsComponent actions={quickActions} />
            </div>
        </>
    )
}
