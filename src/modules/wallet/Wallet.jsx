import './Wallet.css'
import QuickActionsComponent from '../dashboard/components/QuickActionsComponent/QuickActionsComponent'
import { quickActionsData } from './component/QuickActions/example_data.js'

export default function Wallet(){
    return (
        <div className="wallet">
            <div className="wallet-table">
                {/* Put the table componente here */}
                <h1>Cartera</h1>
            </div>
            <QuickActionsComponent actions={quickActionsData} />
        </div>
    )
}
