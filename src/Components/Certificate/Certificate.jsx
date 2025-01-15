import React from 'react';
import 'tailwindcss/tailwind.css';

const CertificateSection = () => {
    return (
        <div className="min-h-screen bg-gray-900 py-10 px-5 md:px-20 flex flex-col items-center">
            {/* Header */}
            <h1 className="text-4xl font-bold text-white text-center mb-8">Certifications in Full Stack Web Development: A Journey of Excellence and Expertise</h1>
            <p className="text-lg text-gray-300 text-center max-w-3xl mb-12">
                I completed a Full Stack Web Development course from Apna college and also from PW Skills (Physics Wallah).
                These courses helped me gain in-depth knowledge of web development, including frontend and backend technologies,
                and allowed me to build impactful projects. The certificates I earned are valid across India and reflect my skills and dedication.
            </p>

            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
                {/* Certificate Header */}
                <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 flex items-center justify-center">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 blur-lg opacity-50 animate-pulse"
                        aria-hidden="true"
                    ></div>
                    <h2 className="text-3xl md:text-4xl font-bold z-10">
                        Full Stack Web Development Certificates
                    </h2>
                </div>

                {/* Description Section */}
                <div className="p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        About PW Skills & Apna College
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        I am proud to have completed my Full Stack Web Development course from two renowned institutions in India: Apna College and PW Skills.
                        Both institutions are known for their excellence in education, innovative teaching methods, and state-of-the-art infrastructure. These courses have
                        equipped me with the skills to develop modern, scalable, and professional web applications.
                    </p>

                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Benefits of the Course
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 mb-6">
                        <li>Gained proficiency in both frontend and backend technologies.</li>
                        <li>Learned to work with modern frameworks like React and Node.js.</li>
                        <li>Developed real-world projects that improved my problem-solving skills.</li>
                        <li>Earned globally valid certificates.</li>
                    </ul>

                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                        Certificate Validity
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                        The certificates I earned are recognized throughout India and showcase my expertise as a Full Stack Web Developer. They are a testament to the
                        knowledge and skills I have gained, enhancing my professional profile significantly.
                    </p>
                </div>

                {/* Certificates Section */}
                <div className="bg-gray-100 p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* PW Skills Certificate */}
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="/PwCertficate.png" // Replace with actual path
                            alt="PW Skills Certificate"
                            className="w-full max-w-md object-contain mb-4 rounded-lg shadow-md transform hover:rotate-2 hover:shadow-xl transition duration-500 ease-in-out"
                        />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">PW Skills</h2>
                        <p className="text-sm text-gray-600 text-center">
                            This certificate from PW Skills signifies my expertise in Full Stack Web Development, including hands-on projects and real-world applications.
                        </p>
                    </div>
                    {/* College Certificate */}
                    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-8 transform hover:scale-105 transition-transform duration-300">
                        <img
                            src="/Certificate.jpg" // Replace with actual path
                            alt="College Certificate"
                            className="w-full max-w-md object-contain mb-4 rounded-lg shadow-md transform hover:rotate-2 hover:shadow-xl transition duration-500 ease-in-out"
                        />
                        <h2 className="text-xl font-semibold text-gray-700 mb-2">Apna College </h2>
                        <p className="text-sm text-gray-600 text-center">
                            This certificate was awarded upon completing my Full Stack Web Development course by Apna College. It represents my commitment and expertise in modern web technologies.
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default CertificateSection;
