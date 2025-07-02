"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";


const socialPlatforms = [
    { name: "LinkedIn", icon: <FaLinkedin size={30} />, link: "https://www.linkedin.com/in/sherazdevelopment/" },
    { name: "GitHub", icon: <FaGithub size={30} />, link: "https://github.com/Meanmernapp" },
    { name: "Mail", icon: <Mail size={30} />, link: "shearzhassan6379@gmail.com" },
    { name: "Phone Number", icon: <Phone size={30} />, link: "" },
];

export default function Footer() {
    return (
        <footer className="bg-[#0c0c0c] text-gray-400 px-4 py-10 md:py-10 md:px-20">
            <motion.div
                className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Left Side */}
                <div className="flex flex-col gap-1 md:gap-4 text-sm md:text-base text-gray-300">
                    <div>
                        Developed by <span className="text-green-400 font-semibold">Sheraz Hassan</span>
                    </div>
                    <div>
                        with <span className="text-green-400 font-semibold">Next.js</span>
                    </div>
                </div>


                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    {socialPlatforms.map(({ name, icon, link }) => (
                        <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            key={name}
                            href={link}
                            aria-label={name}
                            className="rounded-full bg-gray-700 p-2 hover:bg-white hover:text-black transition-colors"
                        >
                            {icon}
                        </motion.a>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.a
                    href="#"
                    whileHover={{ scale: 1.05 }}
                    className="border border-white bg-black px-5 py-2 text-white hover:bg-white hover:text-black transition"
                >
                    Hire Me Now!
                </motion.a>
            </motion.div>

            {/* Bottom Text */}
            {/* <div className="text-center text-sm text-gray-600 mt-10">
                © {new Date().getFullYear()} Sheraz Hassan. All rights reserved.
            </div> */}
        </footer>
    );
}
