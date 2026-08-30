import { useState } from 'react'

import './App.css'
import SideMenu from './modules/sidemenu/SideMenu'
import DashBoard from './modules/dashboard/Dashboard'

function App() {
    return (
        <>
            <SideMenu />
            <DashBoard />
        </>
    )
}

export default App
