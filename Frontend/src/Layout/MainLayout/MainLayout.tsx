import { Outlet } from "react-router-dom"
import { Navbar } from "../../Components/Navbar/Navbar"

import "./MainLayout.scss"
import { Footer } from "../../Components/Footer/Footer"

export const MainLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}