import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaCode,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const ContactHero: React.FC = () => {
  return (
    <div className="bg-cover bg-center bg-gray-900 py-20 flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div className="md:flex items-center justify-center mb-8">
          <img
            src="https://st2.depositphotos.com/1029756/7977/i/450/depositphotos_79773952-stock-photo-contact-me-text-write-on.jpg"
            alt="Contact Image"
            className="md:w-1/2 h-auto rounded-lg shadow-lg mr-8 max-md:mb-4"
          />
          <div>
            <h1 className="text-4xl text-white font-bold mb-4">Contact Me</h1>
            <p className="text-gray-300 mb-4 w-3/4 mx-auto">
              Feel free to reach out to me through any of the following
              channels. I'm always open to new opportunities and collaborations!
            </p>
            <div className="flex justify-center space-x-6">
              <div>
                <FaLinkedin className="inline-block mr-2 text-blue-600" />
                <a
                  href="https://www.linkedin.com/in/syed-mohdin-7ab30718b/"
                  className="text-sm hover:text-blue-600"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </div>
              <div>
                <FaGithub className="inline-block mr-2 text-gray-600" />
                <a
                  href="https://github.com/syedcoder786"
                  target="_blank"
                  className="text-sm hover:text-gray-600"
                >
                  GitHub
                </a>
              </div>
              <div>
                <FaCode className="inline-block mr-2 text-orange-400" />
                <a
                  href="https://leetcode.com/u/jasonryder786/"
                  target="_blank"
                  className="text-sm hover:text-orange-400"
                >
                  LeetCode
                </a>
              </div>

              <div>
                <FaInstagram className="inline-block mr-2 text-pink-400" />
                <a
                  href="https://www.instagram.com/alexhetachi007/"
                  target="_blank"
                  className="text-sm hover:text-pink-400"
                >
                  Instagram
                </a>
              </div>
            </div>
            <div className="flex mt-2 items-center space-x-4 justify-center">
              <p className="text-sm">
                <FaEnvelope className="inline-block mr-2 text-purple-400" />
                jasonryder786@gmail.com
              </p>
              <p className="text-sm">
                <FaPhone className="inline-block mr-2 text-red-400" />
                +91-8006508832
              </p>
            </div>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1nOavAgAno_CNbD7tc_Su7D2984UCFj3d/view?usp=sharing"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-8 inline-block transition duration-300"
            >
              See My Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
