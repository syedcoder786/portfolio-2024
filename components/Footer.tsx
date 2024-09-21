import Link from "next/link";
import React from "react";
import {
  FaHome,
  FaGraduationCap,
  FaFolderOpen,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPhone,
  FaCode,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white border-t-2 border-slate-800">
      <div className="container mx-auto py-12 px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="col-span-2 lg:col-span-1">
            <h2 className="text-xl font-bold mb-4">About Me</h2>
            <p className="text-sm">
              I am a passionate web developer specializing in building
              exceptional digital experiences. Currently, I’m focused on
              creating responsive and scalable web applications.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <FaHome className="inline-block mr-2 text-green-400" />
                  <span className="text-sm hover:text-green-400">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/education">
                  <FaGraduationCap className="inline-block mr-2 text-yellow-400" />
                  <span className="text-sm hover:text-yellow-400">
                    Education
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <FaFolderOpen className="inline-block mr-2 text-blue-400" />
                  <span className="text-sm hover:text-blue-400">Projects</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <FaEnvelope className="inline-block mr-2 text-purple-400" />
                  <span className="text-sm hover:text-purple-400">
                    Contact Me
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Social Media</h2>
            <ul className="space-y-2">
              <li>
                <FaLinkedin className="inline-block mr-2 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/syed-mohdin-7ab30718b/"
                  className="text-sm hover:text-blue-600"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <FaGithub className="inline-block mr-2 text-gray-600" />
                <a
                  href="https://github.com/syedcoder786"
                  target="_blank"
                  className="text-sm hover:text-gray-600"
                >
                  GitHub
                </a>
              </li>
              <li>
                <FaCode className="inline-block mr-2 text-orange-400" />
                <a
                  href="https://leetcode.com/u/jasonryder786/"
                  target="_blank"
                  className="text-sm hover:text-orange-400"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <FaInstagram className="inline-block mr-2 text-pink-400" />
                <a
                  href="https://www.instagram.com/alexhetachi007/"
                  target="_blank"
                  className="text-sm hover:text-pink-400"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Me</h2>
            <p className="text-sm">
              <FaEnvelope className="inline-block mr-2 text-purple-400" />
              Email: jasonryder786@gmail.com
            </p>
            <p className="text-sm">
              <FaPhone className="inline-block mr-2 text-red-400" />
              Phone: +91-8006508832
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-sm">
          <p>&copy; 2024 SM Mohdin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
