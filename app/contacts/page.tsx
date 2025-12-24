"use client";

import { motion } from "framer-motion";
import { Mail, PhoneCall } from "lucide-react";
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope, FaMailBulk } from "react-icons/fa";

const contacts = [
    // {
    //     label: "Yasir Iqbal",
    //     icon: <FaLinkedin size={28} />,
    //     href: "https://www.linkedin.com/in/sherazdevelopment/",
    // },
    {
        label: "Yasir Iqbal",
        icon: <FaGithub size={28} />,
        href: "https://github.com/Meanmernapp",
    },
    // {
    //     label: "+1 321 447 6769",
    //     icon: <PhoneCall size={28} />,
    //     href: "tel:+13214476769", // <-- include `tel:`
    // },
    // {
    //     label: "shearzhassan6379@gmail.com",
    //     icon: <FaEnvelope size={28} />,
    //     href: "mailto:shearzhassan6379@gmail.com",
    // },
];

export default function ContactSection() {
    return (
        <div className="min-h-screen bg-black text-white px-8 py-20">
            <div className=" mx-auto max-w-6xl">


                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-10"
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
                            className="flex items-center space-x-4 text-lg group"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, duration: 0.5 }}
                        >
                            <motion.div
                                className="text-white bg-white/10 p-2 rounded-full group-hover:scale-110 transition-transform duration-300"
                                whileHover={{ rotate: 10 }}
                            >
                                {item.icon}
                            </motion.div>
                            <span className="group-hover:text-green-400 transition-colors duration-200">
                                {item.label}
                            </span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    );
}
