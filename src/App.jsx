import { 
    Outlet,
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import './App.css'
import SideMenu from './modules/sidemenu/SideMenu'
import DashBoard from './modules/dashboard/Dashboard'


function Layout(){
    return (
        <>
            <nav className="nav">
                <SideMenu />
            </nav>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DashBoard />} />
                    <Route path="dashboard" element={<DashBoard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
