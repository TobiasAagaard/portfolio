import { BurgerMenu } from "../BurgerMenu/BurgerMenu"

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>Projekter</li>
            </ul>

            <BurgerMenu />
        </nav>

        
    )
}