import {
  DollarSign,
  Wallet,
  AlertTriangle,
  ShoppingCart,
  BarChart3,
  Plus,
  FileUp,
  FileText,
} from 'lucide-react'
import './Expenses.css'
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
  Wallet,
  AlertTriangle,
  ShoppingCart,
  BarChart3,
}

const actionIcons = {
  Plus,
  FileUp,
  FileText,
}

const cardsData = cardsJson.map((card) => ({
  ...card,
  icon: cardIcons[card.icon],
}))

const quickActions = actionsJson.map((action) => ({
  ...action,
  icon: actionIcons[action.icon],
}))

export default function Expenses(){
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
            <div className="expenses-table">
                {/* Put the table component here */}
                <QuickActionsComponent actions={quickActions} />
            </div>
        </>
    )
}
