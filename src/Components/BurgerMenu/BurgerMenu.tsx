import { useState } from "react"
import { NavLink } from "react-router-dom"

import "./BurgerMenu.scss"


export const BurgerMenu: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false);

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
        <ul  className={menuOpen ? "burgerNav open" : "burgerNav"}>
            <li><NavLink to={"/"} onClick={handleToggle}>Forside</NavLink></li>
            <li><NavLink to={"/"} onClick={handleToggle}>Forside</NavLink></li>
            <li><NavLink to={"/"} onClick={handleToggle}>Forside</NavLink></li>
        </ul>
        </>
    )
}