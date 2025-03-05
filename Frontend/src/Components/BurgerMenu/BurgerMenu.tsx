import { useState } from "react"
import { NavLink } from "react-router-dom";

import "./BurgerMenu.scss"

export const BurgerMenu: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <>
            <div className={menuOpen ? "menuStyles start" : "menuStyles"} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "burgerNav open" : "burgerNav"}>
                <li><NavLink to={"/"}>Forside</NavLink></li>
                <li><NavLink to={"/projects"}>Projekter</NavLink></li>
            </ul>
        </>
    )
}