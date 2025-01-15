import React from "react";

const Skills = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-10">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-100">
        My Skills
      </h1>

      {/* Professional Skills Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-100 mb-8 text-center">
          Professional Skills
        </h2>
        <p className="text-center text-gray-100 mb-10 max-w-3xl mx-auto">
          I believe in leveraging my soft skills to excel in a professional environment. Skills such as creativity, teamwork, communication, and problem-solving are essential for building strong relationships and achieving goals effectively.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { skill: "Creativity", level: 90 },
            { skill: "Team Work", level: 85 },
            { skill: "Communication", level: 88 },
            { skill: "Problem Solving", level: 92 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg transition-transform hover:scale-105">
              <div className="relative w-24 h-24 mb-4">
                <svg
                  className="absolute inset-0"
                  width="100%"
                  height="100%"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    className="text-gray-200 stroke-current"
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeWidth="2"
                  />
                  <path
                    className="text-blue-500 stroke-current"
                    strokeDasharray={`${item.level}, 100`}
                    d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center font-semibold text-lg">
                  {item.level}%
                </span>
              </div>
              <p className="text-lg font-medium text-gray-600">{item.skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-100 mb-8 text-center">
          Technical Skills
        </h2>
        <p className="text-center text-gray-100 mb-10 max-w-3xl mx-auto">
          With a strong foundation in modern web development, I specialize in creating efficient and scalable applications using the MERN stack. My technical expertise includes a deep understanding of front-end and back-end technologies, ensuring end-to-end development solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { skill: "HTML & CSS", level: 95 },
            { skill: "JavaScript", level: 90 },
            { skill: "React.js", level: 88 },
            { skill: "Node.js", level: 85 },
            { skill: "MongoDB", level: 80 },
            { skill: "Express.js", level: 85 },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg transition-transform hover:scale-105">
              <div className="w-full bg-gray-200 rounded-full h-6 mb-4">
                <div
                  className="bg-blue-500 h-6 rounded-full text-right px-2 text-white font-medium"
                  style={{ width: `${item.level}%` }}>
                  {item.level}%
                </div>
              </div>
              <p className="text-lg font-medium text-gray-600">{item.skill}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
