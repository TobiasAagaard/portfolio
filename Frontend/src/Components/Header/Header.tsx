import { useTranslation } from "react-i18next"
import { useTypewriter} from "react-simple-typewriter"
import { motion } from "framer-motion";
import myImg from "../../assets/mig.jpg"
import "./Header.scss"


export const Header: React.FC = () => {
    const {t} = useTranslation();
    const words:string[] = [

        t("typewriter.frontend"),
        t("typewriter.backend"),
        t("typewriter.fullstack"),
        t("typewriter.software"),
        t("typewriter.web")
    ];

    const [text] = useTypewriter({
        words,
        loop: true,
        typeSpeed:70,
        deleteSpeed:50,
        delaySpeed:2500,
       
    });
    return (
        <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }} >
            <article>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}>{t('welcomeMessage')}</motion.h2>
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}>{t('introText')}{" "}<span className="writerBox">{text?.toString() || "\u00A0"}</span></motion.h2>
            </article>
            <motion.img src={myImg}
             width={"200px"}
             alt="Image of me" 
             initial={{ opacity: 0}}
             animate={{ opacity: 1}}
             transition={{ duration: 1.2, ease: "easeOut", delay: 0.6 }}/>
        </motion.header>
    )
}