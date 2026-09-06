import './Expenses.css'
import { Plus, FileUp, FileText } from 'lucide-react'
// Reused Dashboard components are not modified: they already accept data via props.
// This JSON can later be replaced by server data without redesigning those components.
import TopNavigationComponent from '../dashboard/components/topNavigationComponent/topNavigationComponent'
import InformationCardsComponent from '../dashboard/components/InformationCardsComponent/InformationCardsComponent'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
import cardsData from './components/InformationCardsComponent/example_data'
import actionsJson from './components/QuickActionsComponent/example_data.json'

const actionIcons = {
    Plus,
    FileUp,
    FileText,
}

const quickActions = actionsJson.map((action) => ({
    ...action,
    icon: actionIcons[action.icon],
}))

export default function Expenses(){
    return (
        <>
            <TopNavigationComponent organizationName="Altos del Parque" />
            <InformationCardsComponent
                cardsData={cardsData}
                adminName="Laura"
                showDatePicker={false}
            />
            <div className="expenses-table">
                {/* Put the table componente here */}
                <QuickActionsComponent actions={quickActions} />
            </div>
        </>
    )
}
