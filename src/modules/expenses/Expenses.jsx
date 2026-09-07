import { Plus, FileUp, FileText } from 'lucide-react'
import './Expenses.css'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
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
            <div className="expenses-table">
                {/* Put the table componente here */}
                <QuickActionsComponent actions={quickActions} />
            </div>
        </>
    )
}
