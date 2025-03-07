
import { NavLink } from "react-router-dom"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"


import "./Navbar.scss"

export const Navbar: React.FC = () => {

    return (
        <nav className="mainNav">
       <ul className="mainUl">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>Om mog</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Kontakt</NavLink></li>
      </ul>
            
        <BurgerMenu />
        </nav>
    )
}