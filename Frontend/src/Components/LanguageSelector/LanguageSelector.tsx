import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { GrLanguage } from "react-icons/gr";
import "./LanguageSelector.scss"

interface Language {
    code: string,
    lang: string
}

const language: Language[] = [
    {code: "en", lang: "English"},
    {code: "dk", lang: "Dansk"},

]



export const LanguageSelector: React.FC = () => {
    const {i18n} = useTranslation()

    const [open, setOpen] = useState(false)
    
    const size = 30

    const handleToggle = () => {
        setOpen((prev) => !prev);
    }

    useEffect(() => {
        const savedLanguage = localStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);
    
const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    localStorage.setItem("language", lng)
}
    return (
        <>
        <GrLanguage className="globeBtn" size={size} onClick={handleToggle} />
            {open &&(
                <div className="lngBtnDropdown">
                {language.map((lng) => {
                    return (
                        <button 
                        key={lng.code} 
                        onClick={() => {
                            changeLanguage(lng.code);
                            handleToggle();
                        }}
                    >
                        {lng.lang}
                    </button>
                )})}
                </div>
        )}
        </>
    )
}