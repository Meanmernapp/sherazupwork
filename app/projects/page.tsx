"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "Chronicle Documentation Platform",
        img: "/shot/chronicle.jpg",
    },
    {
        title: "Freaks University - EdTech App",
        img: "/shot/Freaks-University.jpg",
    },
    {
        title: "Match Stat Hub - Sports Analytics",
        img: "/shot/Match-Stat-Hub.jpg",
        isPrivate: true,
    },
    {
        title: "Phantom Buster - Automation Tools",
        img: "/shot/phantom-buster.jpg",
    },
    {
        title: "Ticketbro - Event Ticketing",
        img: "/shot/ticketbro.jpg",
    },
    {
        title: "Yolo Health - Clinic Management",
        img: "/shot/Yolo-Health.jpg",
    },
    {
        title: "TimeSheet App - LegalEase",
        img: "/shot/Time-Sheet.jpg",
    },
];


export default function ProjectsSection() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate API or image load
        const timer = setTimeout(() => setLoading(false), 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen px-8 py-20 bg-black text-white">
            <div className=" mx-auto max-w-6xl">

                <h2 className="text-4xl font-bold mb-10">Projects I have worked on:</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {(loading ? Array.from({ length: 6 }) : projects).map((project, i): any => (
                        <motion.div
                            key={i}
                            className={`relative w-full h-52 rounded-xl overflow-hidden bg-white/5 ${loading ? "animate-pulse" : "hover:scale-[1.02] transition-all"
                                }`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15 }}
                        >
                            {loading ? (
                                <div className="w-full h-full bg-gray-800 rounded-lg"></div>
                            ) : (
                                <>
                                    <Image
                                        src={project.img}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-black/60 backdrop-blur text-sm font-medium">
                                        {project.title}
                                        {project.isPrivate && (
                                            <p className="text-xs text-gray-400 mt-1">
                                                * Not publicly available
                                            </p>
                                        )}
                                    </div>
                                </>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}
