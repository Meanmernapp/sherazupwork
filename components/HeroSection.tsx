"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BriefcaseBusiness, RocketIcon } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HireMeNow from "./HireMeNow";
import { TextReveal, FloatingElement, ParallaxSection } from "./AnimationComponents";

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

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: { duration: 1 },
        },
    };

    return (
        <section 
            className="bg-black text-white flex flex-col justify-center px-6 py-20 md:flex-row md:items-center md:justify-between relative overflow-hidden"
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

            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10'>
                {/* Left Side - Text */}
                <motion.div
                    className="max-w-2xl space-y-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    <motion.div variants={titleVariants}>
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                            <motion.span
                                className="text-teal-400 block"
                                itemProp="name"
                                whileHover={{ scale: 1.05, color: "#4ade80" }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                Yasir Iqbal
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.p
                        className="text-gray-400 text-lg"
                        itemProp="jobTitle"
                        variants={itemVariants}
                    >
                        <span className="text-green-400 font-semibold">Senior Full-Stack Engineer</span> | AI/ML Developer | 6+ Years Experience
                    </motion.p>

                    <motion.p
                        className="text-gray-400 text-base hidden"
                        itemProp="description"
                        variants={itemVariants}
                    >
                        AWS-Certified | MERN | React Native | Full Stack Developer | Building Scalable Web & Mobile Applications
                    </motion.p>

                    <motion.div variants={itemVariants}>
                        <HireMeNow />
                    </motion.div>
                </motion.div>

                {/* Right Side - Illustration with Parallax */}
                <motion.div
                    className="mt-10 md:mt-0 w-full max-w-sm mx-auto md:max-w-md"
                    variants={imageVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                >
                    <FloatingElement duration={4} delay={0.5}>
                        <div className="flex justify-center md:justify-end relative">
                            {/* Glow background */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-teal-400 to-green-400 rounded-full blur-2xl opacity-20 -z-10"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: 5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src="/portfolio-picture.jpeg"
                                    alt="Yasir Iqbal - Senior Full-Stack Engineer"
                                    width={300}
                                    height={250}
                                    className="rounded-full shadow-2xl border-2 border-teal-400/50 hover:border-green-400/50 transition-colors"
                                    itemProp="image"
                                    priority
                                />
                            </motion.div>
                        </div>
                    </FloatingElement>
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
