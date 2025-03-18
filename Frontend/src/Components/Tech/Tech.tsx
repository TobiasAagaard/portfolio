import {JSX, useState } from "react";
import { motion } from "framer-motion";

import "./Tech.scss";

interface Tech {
  name: string;

}

const techs: Tech[] = [
  { name: "Node.js" },
  { name: ".Net" },
  { name: "C#"},
  { name: "C++"},
  { name: "Python" },
  { name: "React" },
  { name: "Express.js"},
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "CSS" },
  { name: "HTML" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "PostgreSQL" },
  { name: "Sequelize  ORM" },
  { name: "Figma"},
  { name: "Github" },
  { name: "Vercel"},
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
         
            <p className="tech-name" key={index}>{skill.name}</p>
          
        ))}
      </div>
    </motion.div>
  );
};
