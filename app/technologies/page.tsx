"use client";
import { FaAngular, FaVuejs, FaNodeJs, FaReact, FaJs, FaHtml5, FaCss3, FaSass, FaGitAlt, FaGithub, FaNpm, FaYarn, FaJira, FaFigma } from "react-icons/fa";
import { SiNuxtdotjs, SiTypescript, SiPostman, SiVite, SiWebpack, SiGulp, SiMongodb, SiFirebase, SiJquery, SiRxdb, SiI18Next, SiBabel, SiCanva, SiVuedotjs, SiDatefns, SiVscodium, SiAdobephotoshop, SiReact, SiNextui, SiTailwindcss, SiPython, SiNextdotjs, SiHttpie } from "react-icons/si";
import { PiChatCenteredTextBold } from "react-icons/pi";
import { MdHttp } from 'react-icons/md'
const techData = {
    Frameworks: [
        { name: "React", icon: <SiReact size={48} /> },
        { name: "Next.js", icon: <SiNextdotjs size={48} /> },
        { name: "Node.js", icon: <FaNodeJs size={48} /> },
        { name: "Python", icon: <SiPython size={48} /> },
    ],
    "Main Stack": [
        { name: "JavaScript", icon: <FaJs size={48} /> },
        { name: "TypeScript", icon: <SiTypescript size={48} /> },
        { name: "HTML", icon: <FaHtml5 size={48} /> },
        { name: "CSS", icon: <FaCss3 size={48} /> },
        { name: "SCSS", icon: <FaSass size={48} /> },
        { name: "REST API", icon: <SiPostman size={48} /> },
        { name: "HTTP/HTTPS", icon: <MdHttp size={48} /> },
    ],
    Libraries: [
        { name: "RxJS", icon: <SiRxdb size={48} /> },
        { name: "Material UI", icon: <FaReact size={48} /> },
        { name: "Tailwind", icon: <SiTailwindcss size={48} /> },
        { name: "Shad CN", icon: <SiNextui size={48} /> },
        { name: "i18n", icon: <SiI18Next size={48} /> },
        { name: "jQuery", icon: <SiJquery size={48} /> },
        { name: "Babel", icon: <SiBabel size={48} /> },
        { name: "Date-fns", icon: <SiDatefns size={48} /> },
    ],
    Software: [
        { name: "Jira", icon: <FaJira size={48} /> },
        { name: "ChatGPT", icon: <PiChatCenteredTextBold size={48} /> },
        { name: "Adobe Photoshop", icon: <SiAdobephotoshop size={48} /> },
        { name: "Postman", icon: <SiPostman size={48} /> },
        { name: "Canva", icon: <SiCanva size={48} /> },
        { name: "Figma", icon: <FaFigma size={48} /> },
        { name: "VS Code", icon: <SiVscodium size={48} /> },
    ],
    Databases: [
        { name: "MongoDB", icon: <SiMongodb size={48} /> },
        { name: "Firebase", icon: <SiFirebase size={48} /> },
    ],
    "Version Control": [
        { name: "GIT", icon: <FaGitAlt size={48} /> },
        { name: "GitHub", icon: <FaGithub size={48} /> },
    ],
    Builders: [
        { name: "Gulp", icon: <SiGulp size={48} /> },
        { name: "Webpack", icon: <SiWebpack size={48} /> },
        { name: "Vite", icon: <SiVite size={48} /> },
    ],
    "Package Managers": [
        { name: "Yarn", icon: <FaYarn size={48} /> },
        { name: "NPM", icon: <FaNpm size={48} /> },
    ],
};

export default function TechnologiesSection() {
    return (
        <div className="bg-black text-white px-8 py-16 ">
            <div className=" mx-auto max-w-6xl">


                <h2 className="text-4xl font-bold mb-6">Technologies that I use</h2>
                <p className="text-gray-400 mb-4">
                    Here are the technologies with which I have worked and have some experience — frameworks, databases, libraries, and tools.
                </p>
                <p className="text-gray-400 mb-10">
                    I'm comfortable starting a project from scratch or jumping into existing ones that use these technologies.
                </p>


                {Object.entries(techData).map(([category, items]) => (
                    <div key={category} className="mb-10">
                        <h3 className="text-2xl font-semibold mb-4 border-l-4 border-green-500 pl-4">{category}</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6">
                            {items.map(({ name, icon }) => (
                                <div
                                    key={name}
                                    className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 transition rounded-xl shadow-md backdrop-blur-sm"
                                >
                                    {icon}
                                    <span className="mt-2 text-sm text-center">{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
