import {JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  
  SiCss3,
  SiExpress,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSequelize,
  SiReact,
  SiDotnet,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiPython,
  SiCplusplus 

} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";

import "./Tech.scss";

const size = 30;

interface Tech {
  name: string;
  icon: JSX.Element;
}

const techs: Tech[] = [
  { name: "Node.js", icon: <SiNodedotjs size={size} /> },
  { name: ".Net", icon: <SiDotnet size={size} /> },
  { name: "C#", icon: <TbBrandCSharp  size={size} /> },
  { name: "C++", icon: <SiCplusplus size={size} /> },
  { name: "React", icon: <SiReact size={size} /> },
  { name: "Express.js", icon: <SiExpress size={size} /> },
  { name: "Next.js", icon: <SiNextdotjs size={size} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss  size={size} /> },
  { name: "CSS", icon: <SiCss3  size={size} /> },
  { name: "HTML", icon: <SiHtml5 size={size} /> },
  { name: "JavaScript", icon: <SiJavascript size={size} /> },
  { name: "TypeScript", icon: <SiTypescript size={size} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={size} /> },
  { name: "Sequelize  ORM", icon: <SiSequelize size={size} /> },
  { name: "Figma", icon: <SiFigma size={size} /> },
  { name: "Github", icon: <SiGithub size={size} /> },
  { name: "Vercel", icon: <SiVercel size={size} /> },
  { name: "Python", icon: <SiPython size={size} /> },
  { name: "Visual Studio Code", icon: <DiVisualstudio size={size} /> },
  { name: "Ubuntu", icon: <SiUbuntu size={size} /> },
];

export const Tech: React.FC = () => {
  const [techsList] = useState(techs);

  return (
    <motion.div
      className="tech-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1.6 }}
    >
      <h3>Technologies</h3>
      <div className="tech-track">
        {techsList.map((skill, index) => (
          <div key={index} className="tech-item">
            <span className="tech-icon">{skill.icon}</span>
            <p className="tech-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
