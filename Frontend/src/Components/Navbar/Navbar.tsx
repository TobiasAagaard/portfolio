
import { NavLink } from "react-router-dom"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"


import "./Navbar.scss"

export const Navbar: React.FC = () => {

    return (
        <nav className="mainNav">
            <ul className="mainUl">
                <li><NavLink to={"/"}>Forside</NavLink></li>
                <li><NavLink to={"/projects"}>Projekter</NavLink></li>
            </ul>
            
        <BurgerMenu />
        </nav>
    )
}