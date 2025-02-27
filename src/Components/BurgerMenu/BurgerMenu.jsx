import { useState } from "react"

export const BurgerMenu = () => {

    const [menuOpen, setMenuOpen] = useState(false)

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
        </>

    )
}