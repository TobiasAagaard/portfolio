import { BurgerMenu } from "../BurgerMenu/BurgerMenu";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to={"/"}>Forside</NavLink></li>
                <li><NavLink to={"/"}>Forside</NavLink></li>
                <li><NavLink to={"/"}>Forside</NavLink></li>
            </ul>

            <BurgerMenu />
        </nav>
    );
};