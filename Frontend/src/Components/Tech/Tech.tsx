import {JSX, useState } from "react";
import { animate, delay, motion } from "framer-motion";

import "./Tech.scss";

interface Tech {
  name: string;
}

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
    delay: 1,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1 + 0.1 * index, // Starts after div fades in (1s delay)
    }
  }),
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
      transition={{ delay: 1, duration: 0.5 }}
    >
      <h3>Technologies</h3>
      <div className="tech-track">
        {techsList.map((skill, index) => (
         
            <motion.p className="tech-name" 
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            animate="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            >
              {skill.name}
            </motion.p>
          
        ))}
      </div>
    </motion.div>
  );
};
