import React from "react";

const AchievementSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Achievements
        </h2>
        <div className="flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          <img
            className="mx-auto md:h-[60vh] md:w-[50vw] w-full"
            src="https://mycareersview.com/afile/mcv13828_mcv13681_JEEMAIN.jpg"
            alt="JEE Mains Logo"
          />

          <div className="md:w-3/4 mx-auto ml-4">
            <h3 className="text-2xl font-bold text-white">
              IIT JEE Mains 2020
            </h3>
            <p className="text-gray-300 mt-2">
              Scored <b>96.32 %</b> Percentile
            </p>
            <ul className="list-disc list-inside text-gray-400 mt-4">
              <li>
                Demonstrated strong understanding and proficiency in Physics,
                Chemistry, and Mathematics.
              </li>
              <li>Ranked among the top percentile of students nationwide.</li>
              <li>
                Developed excellent problem-solving and analytical skills
                through rigorous preparation.
              </li>
              <li>
                Consistently practiced and improved speed and accuracy under
                timed conditions.
              </li>
              <li>
                Focused on understanding fundamental concepts and their
                applications.
              </li>
              <li>
                Participated in various mock tests and solved numerous previous
                year question papers.
              </li>
              <li>
                Utilized various online resources and coaching materials for
                comprehensive preparation.
              </li>
              <li>
                Maintained a balanced study schedule and ensured thorough
                revision of all subjects.
              </li>
              <li>
                Received guidance and mentorship from experienced educators and
                mentors.
              </li>
              <li>
                Enhanced critical thinking and logical reasoning abilities
                through diverse practice problems.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementSection;
