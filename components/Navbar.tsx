"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FaHome,
  FaGraduationCap,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/">MyNavbar</Link>
        </div>
        <div className="hidden md:flex space-x-10 relative right-20">
          <Link
            href="/"
            className="text-white flex items-center hover:scale-110"
          >
            <FaHome className="inline-block mr-2 text-green-400 text-lg" />
            <span className=" hover:text-green-400">Home</span>
          </Link>
          <Link
            href="/education"
            className="text-white flex items-center hover:scale-110"
          >
            <FaGraduationCap className="inline-block mr-2 text-yellow-400 text-lg" />
            <span className=" hover:text-yellow-400">Education</span>
          </Link>
          <Link
            href="/projects"
            className="text-white flex items-center hover:scale-110"
          >
            <FaFolderOpen className="inline-block mr-2 text-blue-400 text-lg" />
            <span className=" hover:text-blue-400">Projects</span>
          </Link>
          <Link
            href="/contact"
            className="text-white flex items-center hover:scale-110"
          >
            <FaEnvelope className="inline-block mr-2 text-purple-400 text-lg" />
            <span className="hover:text-purple-400">Contact Me</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col justify-center items-center space-y-6">
          <Link
            href="/"
            className="text-white flex items-center hover:scale-110"
          >
            <FaHome className="inline-block mr-2 text-green-400 text-lg" />
            <span className=" hover:text-green-400">Home</span>
          </Link>
          <Link
            href="/education"
            className="text-white flex items-center hover:scale-110"
          >
            <FaGraduationCap className="inline-block mr-2 text-yellow-400 text-lg" />
            <span className=" hover:text-yellow-400">Education</span>
          </Link>
          <Link
            href="/"
            className="text-white flex items-center hover:scale-110"
          >
            <FaFolderOpen className="inline-block mr-2 text-blue-400 text-lg" />
            <span className=" hover:text-blue-400">Projects</span>
          </Link>
          <Link
            href="/"
            className="text-white flex items-center hover:scale-110"
          >
            <FaEnvelope className="inline-block mr-2 text-purple-400 text-lg" />
            <span className="hover:text-purple-400">Contact Me</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
