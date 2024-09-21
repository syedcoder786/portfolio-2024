"use client";
import React from "react";
import {
  FaCogs,
  FaReact,
  FaAws,
  FaFire,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { SiC, SiSpringboot } from "react-icons/si";
interface HorizontalCardProps {
  title: string;
  description: JSX.Element | string;
  image: string;
  skills: string[];
}

import { motion } from "framer-motion";

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  description,
  image,
  skills,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -500,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 1,
        delay: 0.5,
      }}
      viewport={{ once: true }}
      className="flex max-md:flex-col items-center bg-gray-800 text-white p-6 rounded-lg shadow-lg mb-6 relative"
    >
      <div className="w-1/4">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <div className="md:w-3/4 pl-6">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <div>{description}</div>
        {skills.length > 0 && (
          <div className="flex mt-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mr-4">
                {skill === "MERN" && (
                  <FaCogs className="text-lg mr-1 text-green-400" />
                )}
                {skill === "React" && (
                  <FaReact className="text-lg mr-1 text-blue-400" />
                )}
                {skill === "AWS" && (
                  <FaAws className="text-lg mr-1 text-yellow-400" />
                )}
                {skill === "Firebase" && (
                  <FaFire className="text-lg mr-1 text-red-400" />
                )}
                {skill === "MongoDB Atlas" && (
                  <FaDatabase className="text-lg mr-1 text-purple-400" />
                )}
                {skill === "C++" && (
                  <SiC className="text-lg mr-1 text-orange-400" />
                )}
                {skill === "Java" && (
                  <FaJava className="text-lg mr-1 text-purple-400" />
                )}
                {skill === "Spring Boot" && (
                  <SiSpringboot className="text-lg mr-1 text-green-400" />
                )}
                <span>{skill}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default HorizontalCard;
