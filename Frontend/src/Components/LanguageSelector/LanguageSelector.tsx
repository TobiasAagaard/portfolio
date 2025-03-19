import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { GrLanguage } from "react-icons/gr";
import "./LanguageSelector.scss"
import denmarkImg from "../../assets/denmark.png";
import englandImg from "../../assets/england.png";
import { motion, AnimatePresence } from "framer-motion";

interface Language {
    code: string;
    lang: string;
    img: string; 
}

const language: Language[] = [
    { code: "en", lang: "English", img: englandImg },
    { code: "dk", lang: "Dansk", img: denmarkImg },
];



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
        <GrLanguage   className={`globeBtn ${open ? 'active' : ''}`}  size={size} onClick={handleToggle} />
            
 <AnimatePresence>
  {open && (
    <motion.div 
      className="lngBtnDropdown"
      initial={{ opacity: 0, y: -10 }}  
      animate={{ opacity: 1, y: 0 }}    
      exit={{ opacity: 0, y: -10 }}     
      transition={{ duration: 0.3 }}   
    >
      {language.map((lng) => (
        <motion.img 
          key={lng.code}
          src={lng.img}
          alt={lng.lang}
          onClick={() => {
            changeLanguage(lng.code);
            handleToggle();
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}  
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      ))}
    </motion.div>
  )}
</AnimatePresence>
        </>
    )
}