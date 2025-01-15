import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left Section: Photo */}
                    <div className="flex justify-center md:justify-start">
                        <img
                            src="https://codewithshlok.netlify.app/image/self-removebg-preview.jpg" // Replace with the actual URL of your photo
                            alt="Pawan Kumar"
                            className="rounded-full w-72 h-72 object-cover border-4 border-orange-400"
                        />
                    </div>

                    {/* Right Section: Text Content */}
                    <div className="space-y-2">
                        <p className="text-lg leading-relaxed text-gray-300">
                            Hi there! I'm <span className="text-yellow-400 font-semibold">Pawan Kumar</span>, a passionate and dedicated
                            <span className="text-cyan-400"> Frontend Developer</span>, <span className="text-cyan-400">Full Stack Web Developer</span>,
                            and <span className="text-cyan-400">UI/UX Designer</span>. With over two years of hands-on experience, I strive to create
                            seamless, responsive, and visually appealing digital experiences.I'm on a mission to build intutive,responsive and visually web application that make an impact.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-300">
                            I honed my skills as a  <span className="text-yellow-400 font-semibold">Full Stack Web Developer</span> Through the comprehensive program at
                            <span className="text-cyan-400"> Apna College</span>, where I mastered both <span className='font-semibold'>Frontend </span> and <span className='font-semibold'>Backend</span> technologies.This foundation combined with my knack for  design , allows me to deliver,seamless and user-friendly web solutions form concept to deployment.
                            <div className="text-center mt-10">
                                <h1 className="text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-blue-500 to-purple-500">
                                    Empowering Ideas, Ready For Action.
                                </h1>
                                <a
                                    href="/MyResume.pdf"
                                    target="_blank"
                                    className="inline-block px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-purple-600 to-blue-500 rounded-full shadow-lg hover:from-blue-500 hover:to-purple-600 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                                >
                                    Download CV
                                </a>
                            </div>

                        </p>
                    </div>
                </div>

                {/* Additional Information Section */}
                <div className="mt-16 space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">What I Do</h2>
                            <h2 className="text-2xl font-semibold mb-4">Frontend:-</h2>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>Crafting pixel-perfect and responsive user interfaces using HTML,CSS and Javascript.</li>
                                <li>Experties in modern frameworks like <b>React.js</b>.</li>
                                <li>Priorizing performance optimization and cross-web compatibility.</li>
                                <li>Designing intuitive interfaces with tools like Figma and Adobe XD.</li>
                            </ul>
                            <h2 className="text-2xl font-semibold mb-4 mt-2">Backend:-</h2>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>Building robust server-side application with <b>Node.js</b> and <b>Express.js</b>.</li>
                                <li>Database management using using <b>MongoDB</b>.</li>
                                <li>Implementing secure and scalable <b>RESTful APIs</b> and GraphQL integrations.</li>
                            </ul>
                            <h2 className="text-2xl font-semibold mb-4 mt-2">UI/UX Design:-</h2>
                            <ul className="list-disc list-inside text-gray-300">
                                <li>Design intutive and aesthetically pleasing interfaces with todos like <b>Figma</b> and &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Adobe XD.</b></li>
                                <li>Condusting user reaserch and usability testing to ensure the best user experience.</li>
                                <li>Bringing designs to life with thoughtful animations and interactions.</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                            <div className="flex flex-wrap gap-4">
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">React.js</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Node.js</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">HTML</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">CSS</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Javascript</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Figma</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">MongoDB</span>
                                <span className="bg-gray-800 px-4 py-2 rounded-lg">Express.js</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Tools & Technologies I Use:</h2>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li><b>Frontend: </b>React.js,Tailwind CSS and Bootstrap.</li>
                            <li><b>Backend: </b>Node.js and Express.js</li>
                            <li><b>Database: </b>MongoDB.</li>
                            <li><b>Design: </b>Figma and Adobe XD.</li>
                            <li><b>Version Controls: </b>Git , GitHub and GitLab.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">My Journey So Far :</h2>
                        <p className="text-base md:text-lg lg:text-xl leading-relaxed md:pr-40 lg:pr-80 text-center md:text-left">
                            <b>
                                Over the past two years, I have successfully worked on a variety of projects, ranging from small personal experiments to fully-fledged web applications. Here are a few highlights:
                            </b>
                        </p>

                        <ul className="list-disc list-inside text-gray-300">
                            <li>Developed an e-commerce platform with integrated payment gateways.</li>
                            <li>Created interactive dashboards and data visuallizations tools for real-world applications.</li>
                            <li>Developed numerous and interesting frontend projects.</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">My Values:</h2>
                        <ul className='list-disc list-inside text-gray-300'>
                            <li><b>Innovation: </b>I love exploring new technologies and staying updated with the latest trends in web development and design.</li>
                            <li><b>Collaboration: </b>Working closely with clients and teams to transform  ideas into reality is what drives me.</li>
                            <li><b>Perfections: </b>I pay attention to every detail,ensuringt quality and  consistency in every project I undertake.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">Hobbies & Interests</h2>
                        <p className="text-gray-300 leading-relaxed">
                            When I am not coding, I love exploring nature, photography,places and experimenting with new design trends.
                            I also enjoy reading tech blogs and playing video games to unwind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
