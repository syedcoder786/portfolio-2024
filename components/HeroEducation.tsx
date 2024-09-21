import React from "react";

const HeroEducation = () => {
  return (
    <div
      className="bg-cover bg-center bg-gray-900 py-20 h-[60vh]"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20230518/pngtree-black-graduation-hat-sat-on-golden-paper-image_2584693.jpg')",
      }}
    >
      <div className="container p-4">
        <h1 className="text-4xl text-white font-bold mb-4">Education</h1>
        <p className="text-lg text-gray-100 w-2/4 max-lg:w-full">
          Welcome to my educational journey. I have pursued a Bachelor's degree
          in ECE from <b>Jamia Millia Islamia University</b>, where I gained a
          strong foundation in software development, algorithms, and data
          structures. I have also completed various certifications, including
          Full Stack Development, Cloud Computing, and Blockchain Technology. My
          academic projects and internships have provided hands-on experience
          and have helped shape my skills and knowledge in the tech industry.
        </p>
      </div>
    </div>
  );
};

export default HeroEducation;
