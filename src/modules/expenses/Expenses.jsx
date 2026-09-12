import {
  AlertTriangle,
  BarChart3,
  Building2,
  DollarSign,
  Receipt,
  ShoppingCart,
  Wallet
} from 'lucide-react'
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
import topNavData from './components/TopNavigation/example_data.json'
import cardsData from './components/InformationCards/example_data.json'
import quickActionsData from './components/QuickActions/example_data.json'
import './Expenses.css'

// JSON files only carry strings: this map resolves the icon name
// to the component. Values (titles, amounts, colors) arrive via props
// from the JSON, so the server can replace them without redesign.
// Dashboard base components are not modified.
const icons = {
  AlertTriangle,
  BarChart3,
  Building2,
  DollarSign,
  Receipt,
  ShoppingCart,
  Wallet
}

const cards = cardsData.cards.map((card) => ({
  ...card,
  icon: icons[card.icon]
}))

const actions = quickActionsData.actions.map((action) => ({
  ...action,
  icon: icons[action.icon]
}))

export default function Expenses() {
  return (
    <>
      <TopNavigationComponent
        organizationName={topNavData.organizationName}
        notificationCount={topNavData.notificationCount}
      />
      <InformationCardsComponent
        cardsData={cards}
        adminName={cardsData.adminName}
        showDatePicker={cardsData.showDatePicker}
      />
      <div className="expenses-content">
        <div className="expenses-table">
          {/* Put the table componente here */}
          <h1>Gastos</h1>
        </div>
        <QuickActionsComponent actions={actions} />
      </div>
    </>
  )
}
