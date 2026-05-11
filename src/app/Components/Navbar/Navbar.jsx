
export const Navbar = () => {
    return (
        <nav className="w-full border-b border-gray-200 flex items-center justify-between px-6 py-4">
            <h2 className="text-2xl font-bold">Tobias</h2>

            <ul className="flex space-x-4 list-none">
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
        </nav>
    )
}