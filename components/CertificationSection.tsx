"use client";
import { motion } from "framer-motion";

interface CertificationProps {
  title: string;
  organization: string;
  duration: string;
  description: string[];
  certificateUrl?: string;
  iconUrl: string;
}

const Certification: React.FC<CertificationProps> = ({
  title,
  organization,
  duration,
  description,
  certificateUrl,
  iconUrl,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -60,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
        delay: 1.9,
      }}
      className=" text-white p-6 mb-6 flex max-md:flex-col items-center mx-10"
    >
      <img
        src={iconUrl}
        alt="Certification Icon"
        className="md:w-1/4 md:h-1/4 mr-4 max-md:mb-6"
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-400 mb-2">
          <span className="font-semibold">Organization:</span> {organization}
        </p>
        <p className="text-gray-400 mb-2">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
        <ul className="list-disc pl-5 mb-4">
          {description.map((point, index) => (
            <li key={index} className="text-gray-400">
              {point}
            </li>
          ))}
        </ul>
        {certificateUrl && (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            View Certificate
          </a>
        )}
      </div>
    </motion.div>
  );
};

const CertificationSection: React.FC = () => {
  return (
    <div>
      <motion.h2
        initial={{
          opacity: 0,
          y: -60,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.7,
        }}
        className="text-4xl font-bold text-center text-white my-10"
      >
        My Experience
      </motion.h2>

      <Certification
        title="Software Engineer Intern"
        organization="Bosscoder Academy"
        duration="29 July 2024 - Current"
        description={[
          "Currently working as a Software Engineer Intern at Bosscoder, contributing to their online tech courses platform.",
          "Responsible for developing and maintaining the platform using technologies such as React, Express, Flask, and Firebase database.",
          "Gaining hands-on experience in building scalable and efficient web applications.",
          "Collaborating with a team of developers in an in-office setting to ensure smooth project execution and timely delivery.",
          "Implementing features and enhancements to improve the overall user experience of the platform.",
          "Working with both frontend and backend technologies, providing a comprehensive full-stack development experience.",
        ]}
        iconUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaTXsz9kNC86Uhhs1nP857fmIe0bsSgSQjFw&s"
      />

      <Certification
        title="Full Stack Developer Internship"
        organization="Get Boarded Tech"
        duration="3 months"
        description={[
          "Completed a 3-month internship as a Full Stack Intern at Get Boarded Tech.",
          "Developed web applications using technologies such as MERN stack.",
          "Designed and implemented a gaming website utilizing blockchain technology.",
          "Integrated Ethereum blockchain for in-game transactions and user interactions.",
          "Authored smart contracts in Solidity for implementing game logic and token systems.",
        ]}
        certificateUrl="https://drive.google.com/file/d/1sGDoz7PVOA8YfNyYRFXr3h7we1CqM9CA/view?usp=drive_link"
        iconUrl="https://cdn-icons-png.flaticon.com/512/1119/1119341.png"
      />

      {/* Add more Certification components if you have additional certifications */}
    </div>
  );
};

export default CertificationSection;
