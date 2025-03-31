
import { JSX,cloneElement,  useState } from "react";
import { SiGithub } from "react-icons/si";
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
]




export const Footer: React.FC = () => {
    const [socialsList] = useState(socials);

    return (
        <footer>
             <section className="SocialsContainer">
                {socialsList.map((social) => (
                    <a href={social.link} target="_blank">
                        {cloneElement(social.icon, { color: social.color })} 
                    </a>
                ))}
             </section>
        </footer>
    )
}