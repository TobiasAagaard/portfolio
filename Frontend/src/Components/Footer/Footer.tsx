import { JSX } from "react";
import { SiGithub } from "react-icons/si";
interface SocialsIcons {
    name: string;
    icon: JSX.Element;
    link: string;
}

const socials: SocialsIcons[] = [
    {
        name: "GitHub",
        icon: <SiGithub />,
        link: "https://github.com/TobiasAagaard" 
    },
]




export const Footer: React.FC = () => {
    return (
        <footer>
             <section className="SocialsContainer">

             </section>
        </footer>
    )
}