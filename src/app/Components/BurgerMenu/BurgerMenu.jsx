'use client'
import { useState } from "react"

export const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4 list-none">
                        <li className="text-gray-600 hover:text-gray-900">
                            <a href="#about" className="text-gray-600 hover:text-gray-900">
                                About
                            </a>
                        </li>
                        <li className="text-gray-600 hover:text-gray-900">
                            <a href="#projects" className="text-gray-600 hover:text-gray-900">
                                Projects
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>  
    )

}