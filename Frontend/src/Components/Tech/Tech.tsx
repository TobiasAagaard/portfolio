import {JSX, useState } from "react";
import { animate, delay, motion } from "framer-motion";

import {
  SiBun,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiRailway,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiDrizzle,
  SiHono,
  SiShadcnui,
  SiTurso,
  SiZedindustries,
  SiAstro,
} from "react-icons/si";


import "./Tech.scss";

interface Tech {
  name: string;
  icon: JSX.Element;
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
     delay: 1 + 0.1 * index, 
    }
  }),
}

  const size = 30;

const techs: Tech[] = [
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-500" size={size} />,
  },
  {
    name: "Bun.js",
    icon: <SiBun className="text-orange-200" size={size} />,
  },
  {
    name: "React",
    icon: <SiReact className="text-blue-500" size={size} />,
  },
  {
    name: "Hono",
    icon: <SiHono className="text-white hover:text-orange-400" size={size} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress className="text-white" size={size} />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-white" size={size} />,
  },
  {
    name: "Astro",
    icon: <SiAstro className="text-orange-500" size={size} />,
  },
  {
    name: "Shadcn UI",
    icon: <SiShadcnui className="text-white" size={size} />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500" size={size} />,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="text-blue-500" size={size} />,
  },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-orange-500" size={size} />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" size={size} />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500" size={size} />,
  },
  {
    name: "Go",
    icon: <SiGo className="text-sky-400" size={size} />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" size={size} />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="text-blue-400" size={size} />,
  },
  {
    name: "Turso",
    icon: <SiTurso className="text-emerald-500" size={size} />,
  },
  {
    name: "Drizzle ORM",
    icon: <SiDrizzle className="text-white hover:text-lime-400" size={size} />,
  },
  {
    name: "Prisma ORM",
    icon: <SiPrisma className="text-white" size={size} />,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-indigo-400" size={size} />,
  },
  {
    name: "Github",
    icon: <SiGithub className="text-white" size={size} />,
  },
  {
    name: "Zed",
    icon: <SiZedindustries className="text-white" size={size} />,
  },
  {
    name: "Vercel",
    icon: <SiVercel className="text-white" size={size} />,
  },
  {
    name: "Netlify",
    icon: <SiNetlify className="text-teal-600" size={size} />,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" size={size} />,
  },
  {
    name: "Railway",
    icon: <SiRailway className="text-white " size={size} />,
  },
  {
    name: "Ubuntu",
    icon: <SiUbuntu className="text-orange-500" size={size} />,
  },
];


export const Tech: React.FC = () => {
  const [techsList] = useState(techs);

  return (
    <motion.section
  className="tech-grid"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 0.5 }}
  aria-labelledby="tech-heading"
>
  <h3 id="tech-heading">Technologies</h3>
  <ul className="tech-track">
    {techsList.map((skill, index) => (
      <motion.li 
        className="tech-name" 
        key={index}
        variants={fadeInAnimationVariants}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
        custom={index}
        aria-label={skill.name} // Assuming 'skill.name' holds the technology name
      >
        {skill.icon}  
      </motion.li>
    ))}
  </ul>
</motion.section>
  );
};
