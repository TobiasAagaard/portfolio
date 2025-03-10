import { useState } from "react"
import { NavLink } from "react-router-dom";

import "./BurgerMenu.scss"

export const BurgerMenu: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleToggle = () => {
        setMenuOpen((prev) => !prev);
    }
    return (
        <>
            <div className={menuOpen ? "menuStyles start" : "menuStyles"} onClick={handleToggle}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={menuOpen ? "burgerNav open" : "burgerNav"}>
                <li><NavLink to={"/"} onClick={handleToggle}>Forside</NavLink></li>
                <li><NavLink to={"/projects"} onClick={handleToggle}>Projekter</NavLink></li>
                <li><NavLink to={"/About"} onClick={handleToggle}>About Me</NavLink></li>
                <li><NavLink to={"/Contact"} onClick={handleToggle}>Contact</NavLink></li>
            </ul>
        </>
    )
}