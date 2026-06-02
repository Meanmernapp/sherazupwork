"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import HireMeNow from "./HireMeNow";

const socialPlatforms = [
  { name: "LinkedIn", icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/muhammad-yasir-aqeel-32a602413" },
  { name: "GitHub", icon: <FaGithub size={18} />, link: "https://github.com/Meanmernapp" },
  { name: "Mail", icon: <Mail size={18} />, link: "mailto:codewith.yasiraqeel@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-6 py-8 md:px-8">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center text-sm text-gray-400 md:text-left">
          Developed by <span className="font-medium text-teal-400">Yasir Aqeel</span> with{" "}
          <span className="font-medium text-white">Next.js</span>
        </div>

        <div className="flex items-center gap-3">
          {socialPlatforms.map(({ name, icon, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="rounded-full border border-white/10 p-2.5 text-gray-400 transition hover:border-teal-400/40 hover:bg-white/5 hover:text-teal-400"
            >
              {icon}
            </a>
          ))}
        </div>

        <HireMeNow />
      </motion.div>
    </footer>
  );
}
