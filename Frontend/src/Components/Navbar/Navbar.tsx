
import { NavLink } from "react-router-dom"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"


import "./Navbar.scss"
import { LanguageSelector } from "../LanguageSelector/LanguageSelector"

export const Navbar: React.FC = () => {

    return (
        <nav className="mainNav">
            <h1>Tobias<span className="dotH1">.</span></h1>
       <ul className="mainUl">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
            <li><NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About Me</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
      </ul>
        <LanguageSelector />
        <BurgerMenu />
        </nav>
    )
}