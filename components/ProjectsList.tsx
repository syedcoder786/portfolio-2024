import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";

interface Project {
  title: string;
  description: string;
  link: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "Social Media",
    description:
      "A social media platform to connect people inside Jamia Millia Islamia.",
    link: "https://jamiabook.netlify.app/",
    github: "https://github.com/your-username/social-media-repo",
  },
  {
    title: "Ecommerce",
    description: "An ecommerce website to display products.",
    link: "https://new-ecommerce-vite.netlify.app/",
    github: "https://github.com/your-username/ecommerce-repo",
  },
  {
    title: "8 Ball Pool Coins",
    description: "An ecommerce website for selling 8 ball pool coins.",
    link: "https://syedexpert.netlify.app/",
    github: "https://github.com/your-username/8-ball-pool-coins-repo",
  },
  {
    title: "Decentralized Social Media",
    description:
      "A decentralized social media platform built on Ethereum blockchain using Solidity.",
    link: "https://social-media-dapp-ten.vercel.app/",
    github: "https://github.com/your-username/decentralized-social-media-repo",
  },
  {
    title: "Chat App",
    description: "A real-time chat application built with Socket.IO.",
    link: "https://live-socket-chat.netlify.app/",
    github: "https://github.com/your-username/chat-app-repo",
  },
  {
    title: "Payment Gateway",
    description: "A payment gateway integration using Razorpay.",
    link: "https://mern-razorpay.netlify.app/",
    github: "https://github.com/your-username/payment-gateway-repo",
  },
];

const ProjectsList: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          My Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="flex space-x-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <FaGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <FaLink className="text-2xl" />
                  </a>
                </div>
                <div className="flex space-x-4 mt-4">
                  {/* <SiNextdotjs
                    className="text-2xl text-blue-400"
                    title="Next.js"
                  /> */}
                  <SiReact
                    className="text-2xl text-blue-400"
                    title="React.js"
                  />
                  <SiNodedotjs
                    className="text-2xl text-green-400"
                    title="Node.js"
                  />
                  <SiExpress
                    className="text-2xl text-green-400"
                    title="Express.js"
                  />
                  <SiMongodb
                    className="text-2xl text-green-500"
                    title="MongoDB"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://github.com/syedcoder786?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-3 rounded hover:bg-blue-600 focus:outline-none"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsList;
