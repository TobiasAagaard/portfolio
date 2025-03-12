
import { ul } from "framer-motion/client"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

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
        
        language.map((lng) => {
            return (
            <button key={lng.code} onClick={() => changeLanguage(lng.code)}>{lng.lang}</button>
        )})
    )
}