
import { NavLink } from "react-router-dom"
import { BurgerMenu } from "../BurgerMenu/BurgerMenu"

import langImg from "../../assets/language-svgrepo-com (1).svg"

import "./Navbar.scss"

export const Navbar: React.FC = () => {
    return (
        <nav className="mainNav">
            <ul className="mainUl">
                <li><NavLink to={"/"}>Forside</NavLink></li>
                <li><NavLink to={"/projects"}>Projekter</NavLink></li>
            </ul>
            
        <div>
            <img src={langImg} alt="" />
        </div>
        <BurgerMenu />
        </nav>
    )
}