"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

const socialPlatforms = [
  { name: "LinkedIn", icon: <FaLinkedin size={18} />, link: "https://www.linkedin.com/in/awais-hassan-44a514394" },
  { name: "Mail", icon: <Mail size={18} />, link: "mailto:awaishassan5000@gmail.com" },
  { name: "Phone", icon: <Phone size={18} />, link: "tel:+923703639146" },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/[0.06] bg-[#0d0f14] px-5 py-10 md:px-10">
      <motion.div
        className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white">Awais Hassan</p>
          <p className="mt-1 text-sm text-slate-500">Lahore, Pakistan · Full Stack Engineer</p>
        </div>

        <div className="flex items-center gap-3">
          {socialPlatforms.map(({ name, icon, link }) => (
            <a
              key={name}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              className="rounded-xl border border-white/[0.08] bg-[#141820] p-3 text-slate-400 transition hover:border-violet-500/40 hover:text-violet-300"
            >
              {icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-600">© {new Date().getFullYear()} · Built with Next.js</p>
      </motion.div>
    </footer>
  );
}
