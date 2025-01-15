
const links = [
    { name: 'Facebook', href: 'https://www.facebook.com/pawankumarsngpk/' },
    { name: 'Instagram', href: 'https://www.instagram.com/codewithshlok001/' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/pawan-kumar-105b5a29b/' },
    { name: 'Github', href: 'https://github.com/codewithshlok' },
];

export default function Home() {
    return (
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
                className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center"
            />
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Left Section */}
                    <div>
                        <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">Hey, I'm Pawan Kumar</h3>
                        <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                            I am a skilled Full Stack Web Developer with expertise in building dynamic, scalable, and high-performance web applications. Specializing in the MERN stack (MongoDB, Express.js, React, and Node.js), I have a solid understanding of both front-end and back-end development. With a passion for creating seamless user experiences, I leverage modern technologies to design and implement responsive and feature-rich web applications.
                            <br />
                            <br />
                            I am proficient in utilizing React.js for building interactive user interfaces, and Node.js and Express.js for crafting efficient and scalable server-side logic. My experience extends to database management with MongoDB, as well as version control using Git and GitHub.
                        </p>
                        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
                            {links.map((link) => (
                                <a key={link.name} href={link.href}>
                                    {link.name} <span aria-hidden="true">&rarr;</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="hidden lg:block">
                        <img
                            src="https://demo.themesberg.com/landwind/images/hero.png"
                            alt="hero image"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

