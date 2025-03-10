import { useTranslation } from "react-i18next"
import myImg from "../../assets/mig.jpg"
import "./Frontpage.scss"


export const Frontend: React.FC = () => {
    const {t} = useTranslation();
    return (
        <header>
            <h1>{t('welcomeMessege')}</h1>
            <img src={myImg} width={"200px"} alt="" />
        </header>
    )
}