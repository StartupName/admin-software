import { 
    Outlet,
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'

import './App.css'
import SideMenu from './modules/sidemenu/SideMenu'
import DashBoard from './modules/dashboard/Dashboard'
import Apartments from './modules/apartments/Apartments'


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
                    <Route index element={<>Home</>} />
                    <Route path="dashboard" element={<DashBoard />} />
                    <Route path="apartments" element={<Apartments />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
