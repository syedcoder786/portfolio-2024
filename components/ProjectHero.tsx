import React from "react";

const ProjectHero: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center bg-gray-900 py-20 h-[60vh]"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/06/96/91/69/360_F_696916915_mBAKOp6gKArvAQKBeUkm7y8bKQfpczbt.jpg')",
      }}
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl text-white font-bold mb-4">My Projects</h1>
        <p className="text-lg text-white max-w-2xl mx-auto">
          Welcome to my projects portfolio. Here, you can explore the diverse
          range of projects I have worked on, from web development to mobile
          applications and blockchain technology.
        </p>
      </div>
    </div>
  );
};

export default ProjectHero;
