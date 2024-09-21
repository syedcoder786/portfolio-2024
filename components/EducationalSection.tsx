import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Education
        </h2>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full md:w-1/5 object-cover rounded-full p-4"
              src="https://vendotic.com/public/uploads/large/jamia-millia-islamia-logo-hd-png-vector-free-download-121.png"
              alt="Jamia Millia Islamia"
            />
            <div className="p-6 md:w-3/4 mx-auto">
              <div className="md:flex  justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    B.Tech in Electronics & Communication Engineering
                  </h3>
                  <p className="text-gray-300">
                    Jamia Millia Islamia, New Delhi
                  </p>
                  <p className="text-gray-300">8 CGPA</p>
                </div>
                <p className="text-gray-300">Jan 2021 - May 2024</p>
              </div>
              <a
                href="https://www.jmi.ac.in/"
                target="_blank"
                className="text-blue-400 hover:text-blue-500 underline"
              >
                Visit Website
              </a>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>
                  Studied core ece subjects including algorithms, data
                  structures, and software engineering.
                </li>
                <li>
                  Completed projects on web development, mobile applications,
                  and blockchain technology.
                </li>
                <li>
                  Participated in various coding competitions and hackathons.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full md:w-1/5 object-cover rounded-full p-4"
              src="https://pbs.twimg.com/profile_images/1321691542336102400/hShX1S-6_400x400.jpg"
              alt="DMA Rampur"
            />
            <div className="p-6 md:w-3/4 mx-auto">
              <div className="md:flex  justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Higher Secondary Education (12th Class)
                  </h3>
                  <p className="text-gray-300">
                    Dayawati Modi Academy (DMA), Rampur
                  </p>
                  <p className="text-gray-300">CBSE Board</p>
                  <p className="text-gray-300">85%</p>
                </div>
                <p className="text-gray-300">2019</p>
              </div>
              <a
                href="https://www.dmarampur.com/"
                target="_blank"
                className="text-blue-400 hover:text-blue-500 underline"
              >
                Visit Website
              </a>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Achieved 85%.</li>
                <li>Excelled in Physics, Chemistry, and Mathematics.</li>
                <li>Actively participated in science fairs and exhibitions.</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full md:w-1/5 object-cover rounded-full p-4"
              src="https://pbs.twimg.com/profile_images/1321691542336102400/hShX1S-6_400x400.jpg"
              alt="DMA Rampur"
            />
            <div className="p-6 md:w-3/4 mx-auto">
              <div className="md:flex  justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Secondary Education (10th Class)
                  </h3>
                  <p className="text-gray-300">
                    Dayawati Modi Academy (DMA), Rampur
                  </p>
                  <p className="text-gray-300">CBSE Board</p>
                  <p className="text-gray-300">10 CGPA</p>
                </div>
                <p className="text-gray-300">2017</p>
              </div>
              <a
                href="https://www.dmarampur.com/"
                target="_blank"
                className="text-blue-400 hover:text-blue-500 underline"
              >
                Visit Website
              </a>
              <ul className="list-disc list-inside text-gray-400 mt-4">
                <li>Achieved 10 CGPA.</li>
                <li>
                  Participated in various extracurricular activities including
                  debates and sports.
                </li>
                <li>
                  Member of the school science club and participated in
                  inter-school science competitions.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
