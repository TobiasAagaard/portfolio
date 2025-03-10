import { useTranslation } from "react-i18next"
import { useTypewriter} from "react-simple-typewriter"
import myImg from "../../assets/mig.jpg"
import "./Frontpage.scss"


export const Frontend: React.FC = () => {
    const {t} = useTranslation();
    const words:string[] = [

        t("typewriter.first"),
        t("typewriter.second"),
        t("typewriter.third")
    ];

    const [text] = useTypewriter({
        words,
        loop: true,
        typeSpeed: 100,
        delaySpeed: 5500,
       
    });
    return (
        <header>
            <article>
                <h2>{t('welcomeMessage')}</h2>
                <h2>{t('introText')}{" "}<span className="writerBox">{text?.toString() || "\u00A0"}</span></h2>
            </article>
            <img src={myImg} width={"200px"} alt="" />
        </header>
    )
}