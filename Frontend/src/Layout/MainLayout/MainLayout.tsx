import { Outlet } from "react-router-dom"
import { Navbar } from "../../Components/Navbar/Navbar"

import "./MainLayout.scss"

export const MainLayout: React.FC = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}