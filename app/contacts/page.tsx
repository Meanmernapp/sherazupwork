"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope, FaMailBulk } from "react-icons/fa";

const contacts = [
    {
        label: "Muhammad Yasir Aqeel",
        icon: <FaLinkedin size={28} />,
        href: "https://www.linkedin.com/in/muhammad-yasir-aqeel-32a602413",
    },
    {
        label: "GitHub",
        icon: <FaGithub size={28} />,
        href: "https://github.com/Meanmernapp",
    },
    {
        label: "codewith.yasiraqeel@gmail.com",
        icon: <FaEnvelope size={28} />,
        href: "mailto:codewith.yasiraqeel@gmail.com",
    },
];

export default function ContactSection() {
    return (
        <div className="min-h-screen bg-black text-white px-6 py-16 md:px-8 md:py-20">
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-medium uppercase tracking-widest text-teal-400 mb-2">Get in touch</p>
                <motion.h2
                    className="text-3xl md:text-4xl font-bold tracking-tight mb-10"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    My Contacts
                </motion.h2>

                <div className="space-y-6">
                    {contacts.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-lg group hover:border-teal-400/30 transition"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <motion.div
                                className="text-teal-400 bg-teal-400/10 p-2.5 rounded-full group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ rotate: 10 }}
                            >
                                {item.icon}
                            </motion.div>
                            <span className="text-gray-200 group-hover:text-teal-400 transition-colors duration-200">
                                {item.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
