"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HireMeNow from "./HireMeNow";

export default function HeroSection() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <section 
            className="bg-black text-white flex flex-col justify-center px-6 py-24 md:items-center relative overflow-hidden"
            itemScope 
            itemType="https://schema.org/Person"
        >
            {/* Animated background elements */}
            <motion.div
                className="absolute -top-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"
                animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-400/10 rounded-full blur-3xl"
                animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <div className='max-w-6xl mx-auto relative z-10'>
                <motion.div
                    className="max-w-2xl space-y-6 text-center md:text-left"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    <motion.div variants={titleVariants}>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                            <motion.span
                                className="text-teal-400 block"
                                itemProp="name"
                                whileHover={{ scale: 1.05, color: "#4ade80" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Muhammad Yasir Aqeel
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-gray-300 text-lg"
                        itemProp="jobTitle"
                        variants={itemVariants}
                    >
                        <span className="text-green-400 font-semibold">Senior Full Stack Engineer</span> | MERN/MEAN | Scalable SaaS Engineer | 7+ Years Experience
                    </motion.p>

                    <motion.p
                        className="text-gray-400 text-base"
                        itemProp="description"
                        variants={itemVariants}
                    >
                        React.js, Node.js, NestJS, TypeScript, Next.js, Angular, AWS, Docker, Microservices, Python, GraphQL, LLM, RAG, Kafka, Kubernetes, SQL, Tailwind CSS, and React Native.
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <HireMeNow />
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="text-center text-gray-400 text-sm">
                    <p>Scroll to explore</p>
                    <ArrowRight className="rotate-90 mx-auto mt-2 h-5 w-5" />
                </div>
            </motion.div>
        </section>
    );
}
