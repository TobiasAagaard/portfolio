
import { JSX, cloneElement,  useState, useRef  } from "react";
import { motion, useInView } from "framer-motion";
import { SiGithub,
        SiLinkedin 
 } from "react-icons/si";
import "./footer.scss"
interface SocialsIcons {
    name: string;
    icon: JSX.Element;
    link: string;
    color: string;
}

const size = 30;

const socials: SocialsIcons[] = [
    {
        name: "GitHub",
        icon: <SiGithub size={size} />,
        link: "https://github.com/TobiasAagaard",
        color: "fff",
    },
    {
        name: "LinkDin",
        icon: <SiLinkedin size={size} />,
        link: "https://www.linkedin.com/in/tobias-aagaard-christiansen-006152288/",
        color: "#fff"
    }
]




export const Footer: React.FC = () => {
    const [socialsList] = useState(socials);
    const footerRef = useRef(null);
    const isInView = useInView(footerRef,);

    return (
        <footer ref={footerRef} className="footer">
            <section className="SocialsContainer">
                {socialsList.map((social, index) => (
                    <motion.a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        {cloneElement(social.icon, { color: social.color })}
                    </motion.a>
                ))}
            </section>
        </footer>
    )
}