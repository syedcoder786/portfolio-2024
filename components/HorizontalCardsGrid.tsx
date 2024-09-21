import React from "react";
import HorizontalCard from "./HorizontalCard";

const expertise = [
  {
    title: "Problem Solving",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Proficient in C++ programming language, used extensively for
          competitive programming, algorithmic problem-solving, and data
          structures implementation.
        </li>
        <li>
          Regularly solve problems on platforms like LeetCode, GeeksForGeeks,
          and Codeforces, focusing on improving problem-solving skills and
          algorithmic thinking.
        </li>
        <li>
          In-depth understanding and implementation of various data structures
          and algorithms including arrays, linked lists, trees, graphs, dynamic
          programming, and more.
        </li>
      </ul>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/8553/8553558.png",
    skills: ["C++"],
  },
  {
    title: "Web Development",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Proficient in MERN (MongoDB, Express.js, React.js, Node.js) stack,
          with hands-on experience in building full-stack web applications.
        </li>
        <li>
          Skilled in UI/UX design principles, ensuring intuitive and visually
          appealing user interfaces for web applications.
        </li>
        <li>
          Experienced in developing native mobile apps using React Native,
          providing cross-platform compatibility and seamless user experiences.
        </li>
        <li>
          Knowledgeable in Java Spring Boot with MySQL, capable of building
          scalable backend services and handling complex data management.
        </li>
        <li>
          Familiar with microservices architecture, enabling the development of
          modular and distributed systems for enterprise-level applications.
        </li>
      </ul>
    ),
    image: "https://cdn-icons-png.flaticon.com/512/9414/9414296.png",
    skills: ["MERN", "React", "Java", "Spring Boot"],
  },
  {
    title: "Cloud Services",
    description: (
      <ul className="list-disc pl-5">
        <li>
          Extensive experience with AWS (Amazon Web Services) including EC2
          (Elastic Compute Cloud) for scalable computing capacity, S3 (Simple
          Storage Service) for object storage, and MediaConvert for file format
          conversion and transcoding.
        </li>
        <li>
          Proficient in setting up and managing cloud-based solutions, ensuring
          high availability, scalability, and security for web applications.
        </li>
        <li>
          Hands-on experience with cloud deployment strategies, including
          continuous integration and continuous deployment (CI/CD) pipelines for
          efficient and automated deployment processes.
        </li>
      </ul>
    ),
    image: "https://cdn-icons-png.freepik.com/512/7086/7086578.png",
    skills: ["AWS", "Firebase", "MongoDB Atlas"],
  },
];

const HorizontalCardsGrid: React.FC = () => {
  return (
    <section className="py-10 bg-gray-900">
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Expertise
        </h2>
        <div className="space-y-6">
          {expertise.map((skill, index) => (
            <HorizontalCard
              key={index}
              title={skill.title}
              description={skill.description}
              image={skill.image}
              skills={skill.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalCardsGrid;
