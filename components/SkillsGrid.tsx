"use client";
import SkillsCard from "./SkillsCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSolidity,
  SiCplusplus,
  SiPython,
  SiDatabricks,
  SiSpringboot,
} from "react-icons/si";
import { motion, useAnimation, Variants } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { useEffect } from "react";
const skills = [
  {
    title: "HTML",
    description: "Markup language for creating web pages",
    icon: <FaHtml5 className="text-6xl text-orange-600" />,
  },
  {
    title: "CSS",
    description: "Style sheet language for designing web pages",
    icon: <FaCss3Alt className="text-6xl text-blue-600" />,
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework",
    icon: <SiTailwindcss className="text-6xl text-blue-400" />,
  },
  {
    title: "JavaScript",
    description: "Programming language for the web",
    icon: <FaJs className="text-6xl text-yellow-500" />,
  },
  {
    title: "TypeScript",
    description: "Typed superset of JavaScript",
    icon: <SiTypescript className="text-6xl text-blue-500" />,
  },
  {
    title: "Next.js",
    description: "React framework for production",
    icon: <SiNextdotjs className="text-6xl text-black" />,
  },
  {
    title: "React.js",
    description: "JavaScript library for building user interfaces",
    icon: <FaReact className="text-6xl text-blue-500" />,
  },
  {
    title: "React Native",
    description: "Framework for building native apps using React",
    icon: <FaReact className="text-6xl text-blue-500" />,
  },
  {
    title: "Node.js",
    description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
    icon: <FaNodeJs className="text-6xl text-green-500" />,
  },
  {
    title: "Express.js",
    description: "Fast, unopinionated, minimalist web framework for Node.js",
    icon: <SiExpress className="text-6xl text-gray-500" />,
  },
  {
    title: "Spring Boot",
    description:
      "Powerful, production-ready, and opinionated framework for building Java applications",
    icon: <SiSpringboot className="text-6xl text-green-500" />,
  },
  {
    title: "MongoDB",
    description: "NoSQL database",
    icon: <SiMongodb className="text-6xl text-green-600" />,
  },
  {
    title: "MySQL",
    description: "Relational database management system",
    icon: <SiMysql className="text-6xl text-blue-600" />,
  },
  {
    title: "Git",
    description: "Version control system",
    icon: <FaGitAlt className="text-6xl text-orange-600" />,
  },
  {
    title: "Solidity",
    description: "Programming language for Ethereum smart contracts",
    icon: <SiSolidity className="text-6xl text-black" />,
  },
  {
    title: "AWS",
    description: "Amazon Web Services",
    icon: <FaAws className="text-6xl text-orange-500" />,
  },
  {
    title: "C++",
    description: "General-purpose programming language",
    icon: <SiCplusplus className="text-6xl text-blue-600" />,
  },
  {
    title: "Java",
    description: "General-purpose programming language",
    icon: <FaJava className="text-6xl text-blue-600" />,
  },
  {
    title: "Python",
    description: "Programming language for general-purpose programming",
    icon: <SiPython className="text-6xl text-yellow-500" />,
  },
  {
    title: "DSA",
    description: "Data Structures and Algorithms",
    icon: <SiDatabricks className="text-6xl text-red-500" />,
  },
];
const containerVariants: Variants = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const SkillsGrid: React.FC = () => {
  // const controls = useAnimation();
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  //   threshold: 0.1,
  // });

  // useEffect(() => {
  //   if (inView) {
  //     controls.start("visible");
  //   }
  // }, [controls, inView]);

  return (
    <section className="py-10 bg-gray-900">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Skills
        </h2>
        <motion.div
          // ref={ref}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <SkillsCard
              key={index}
              title={skill.title}
              description={skill.description}
              icon={skill.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsGrid;
