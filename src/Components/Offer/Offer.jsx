import React from "react";
import { FaLaptopCode, FaServer, FaPaintBrush, FaDatabase } from "react-icons/fa";

const Offer = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center p-6 md:p-10"
      style={{ backgroundImage: "url('/service.jpeg')" }}
    >
      {/* Overlay */}
      <div className="bg-gray-900 bg-opacity-75 min-h-screen p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10 text-gray-100">
          My Services
        </h1>

        {/* Description Paragraph */}
        <p className="text-center text-gray-100 mb-6 md:mb-10 max-w-3xl mx-auto text-sm sm:text-base">
          I provide comprehensive services in Frontend Development, Backend Development, UI/UX Design, and MongoDB Database Management. By choosing my services, you ensure a seamless development process, efficient and scalable solutions, and user-friendly designs that cater to your business needs. With expertise in modern tools and technologies like React.js, Node.js, and MongoDB, I aim to deliver high-quality results that enhance your digital presence, ensure data security, and improve overall user experience.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Frontend Service */}
          <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-300">
            <FaLaptopCode className="text-blue-500 text-6xl mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">Frontend Development</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Creating responsive and visually appealing user interfaces using modern frameworks and tools like React.js.
            </p>
          </div>

          {/* Backend Service */}
          <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-300">
            <FaServer className="text-green-500 text-6xl mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">Backend Development</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Building robust and scalable server-side applications with Node.js, Express.js, and databases like MongoDB.
            </p>
          </div>

          {/* UI/UX Design Service */}
          <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-300">
            <FaPaintBrush className="text-purple-500 text-6xl mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">UI/UX Design</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Crafting user-friendly designs and enhancing user experiences to make applications intuitive and engaging.
            </p>
          </div>

          {/* MongoDB Database Management Service */}
          <div className="flex flex-col items-center justify-center bg-white p-6 shadow-md rounded-lg transform hover:scale-105 hover:shadow-lg transition duration-300">
            <FaDatabase className="text-teal-500 text-6xl mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 text-center">MongoDB Database Management</h2>
            <p className="text-gray-600 text-center text-sm sm:text-base">
              Managing, designing, and optimizing MongoDB databases to ensure data integrity, security, and scalability.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
