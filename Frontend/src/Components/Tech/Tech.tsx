import { JSX, useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"

import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

import "./Tech.scss";

interface Tech {
  name: string;
  icon: JSX.Element;
  color: string; // Added color property
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + 0.12 * index,
    },
  }),
};


const size = 30;

const techs: Tech[] = [
    {
      name: "Node.js",
      icon: <SiNodedotjs size={size} />,
      color: "#8CC84B"
    },
    {
      name: "React",
      icon: <SiReact size={size} />,
      color: "#80DEEA"
    },
    {
      name: "Express.js",
      icon: <SiExpress size={size} />,
      color: "#A0A0A0"
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={size} />,
      color: "#D3D3D3"
    },
    {
      name: "CSS",
      icon: <SiCss3 size={size} />,
      color: "#42A5F5"
    },
    {
      name: "HTML",
      icon: <SiHtml5 size={size} />,
      color: "#FF7043"
    },
    {
      name: "JavaScript",
      icon: <SiJavascript size={size} />,
      color: "#FFEB3B"
    },
    {
      name: "TypeScript",
      icon: <SiTypescript size={size} />,
      color: "#64B5F6"
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql size={size} />,
      color: "#78909C"
    },
    {
      name: "Github",
      icon: <SiGithub size={size} />,
      color: "#EAEAEA"
    },
    {
      name: "Vercel",
      icon: <SiVercel size={size} />,
      color: "#CCCCCC"
    },
    {
      name: "Docker",
      icon: <SiDocker size={size} />,
      color: "#6EC6FF"
    },
  
];

export const Tech: React.FC = () => {
  const [techsList] = useState(techs);
  const {t} = useTranslation();

  return (
    <motion.section
      className="tech-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-labelledby="tech-heading"
    >
      <motion.h3 id="tech-heading">{t('techHeader')}</motion.h3>
      <ul className="tech-track">
        {techsList.map((skill, index) => (
          <motion.li
            className="tech-list"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
            custom={index}
            aria-label={skill.name}
            style={{
              backgroundColor: skill.color
            }}
          >
            {skill.icon}
            <span className="techName">{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};
