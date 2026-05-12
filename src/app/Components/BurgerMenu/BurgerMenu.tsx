'use client'
import { useState } from "react"

export const BurgerMenu = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const links = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
    ]

    return (
        <div className="md:hidden">
            <button
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                className="relative z-50 w-10 h-10 flex flex-col justify-center cursor-pointer items-center focus:outline-none text-gray-700 hover:text-gray-900 transition-colors duration-300"
            >
                <span
                    className={`absolute block h-0.5 w-6 bg-current rounded transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                        isOpen ? "rotate-45" : "-translate-y-2"
                    }`}
                />
                <span
                    className={`absolute block h-0.5 w-6 bg-current rounded transition-all duration-200 ease-in-out ${
                        isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                    }`}
                />
                <span
                    className={`absolute block h-0.5 w-6 bg-current rounded transition-all duration-300 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                        isOpen ? "-rotate-45" : "translate-y-2"
                    }`}
                />
            </button>

            <div
                aria-hidden={!isOpen}
                className={`fixed inset-0 z-40 bg-[#FAF7F2] transition-[clip-path] duration-700 ease-in-out ${
                    isOpen ? "pointer-events-auto" : "pointer-events-none"
                }`}
                style={{
                    clipPath: isOpen
                        ? "circle(150% at calc(100% - 2rem) 2rem)"
                        : "circle(0% at calc(100% - 2rem) 2rem)",
                }}
            >
                <ul className="flex flex-col items-center justify-center h-full gap-8 list-none">
                    {links.map((link, i) => (
                        <li
                            key={link.href}
                            className={`transition-all duration-500 ease-out ${
                                isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-6 opacity-0"
                            }`}
                            style={{ transitionDelay: isOpen ? `${i * 100 + 300}ms` : "0ms" }}
                        >
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-light text-gray-800 hover:text-gray-500 transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )

}
