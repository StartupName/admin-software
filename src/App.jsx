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
                <SideMenu title="Altos del Parque" />
            </nav>
            <main className="main">
                <Outlet />
            </main>
        </>
    )
}

function SectionPlaceholder({ title }) {
    return <h1 style={{ padding: '1.5rem' }}>{title}</h1>
}


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<>Home</>} />
                    <Route path="dashboard" element={<DashBoard />} />
                    <Route path="apartments" element={<Apartments />} />
                    <Route path="payments" element={<SectionPlaceholder title="Pagos" />} />
                    <Route path="portfolio" element={<SectionPlaceholder title="Cartera" />} />
                    <Route path="expenses" element={<SectionPlaceholder title="Gastos" />} />
                    <Route path="reports" element={<SectionPlaceholder title="Reportes" />} />
                    <Route path="communications" element={<SectionPlaceholder title="Comunicaciones" />} />
                    <Route path="users" element={<SectionPlaceholder title="Usuarios y roles" />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
