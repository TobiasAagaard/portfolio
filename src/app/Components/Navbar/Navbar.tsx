import { BurgerMenu } from "../BurgerMenu/BurgerMenu"
import Link from "next/link"

export const Navbar = () => {
    return (
        <>
        <nav className="relative w-full border-b border-gray-200 flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-bold">Tobias.Dev</h2>

            <ul className="hidden md:flex space-x-4 list-none">
                <li className="text-gray-600 hover:text-gray-900">
                    <Link href="#about" className="text-gray-600 hover:text-gray-900">
                        About
                    </Link>
                </li>
                <li className="text-gray-600 hover:text-gray-900">
                    <Link href="#projects" className="text-gray-600 hover:text-gray-900">
                        Projects
                    </Link>
                </li>

            </ul>

            <BurgerMenu />
        </nav>
        
        </>
    )
}