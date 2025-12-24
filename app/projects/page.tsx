"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects: any = [
    {
        "title": "Chronicle Documentation Platform",
        "link": "https://chroniclehq.com/",
        "stack": "Prisma + PostgreSQL + AWS",
        "summary": "Implemented backend infrastructure for collaborative documentation platform. Used Prisma ORM with PostgreSQL and deployed via AWS services.",
        "feedback": "⭐⭐⭐⭐⭐ 'Very efficient and quick to solve backend complexity. Highly recommended.'",
        img: "/shot/chronicle.jpg",

    },
    {
        "title": "Freaks University - EdTech App",
        "link": "https://freak-university.netlify.app/",
        "stack": "React + Tailwind CSS",
        "summary": "Designed and developed an EdTech platform targeting creators and online learners. Focused on performance and accessibility.",
        "feedback": "⭐⭐⭐⭐ 'Great eye for clean design and usability. Solid work.'",
        img: "/shot/Freaks-University.jpg",

    },
    {
        "title": "Match Stat Hub - Sports Analytics",
        "link": "https://www.matchstathub.com/",
        "stack": "Next.js + Chart.js + MongoDB",
        "summary": "Developed a sports analytics dashboard with live data visualization, match tracking, and performance analysis tools.",
        "feedback": "⭐⭐⭐⭐⭐ 'Loved the dashboards and real-time insights. Very intuitive design.'",
        img: "/shot/Match-Stat-Hub.jpg",

    },
    {
        "title": "Phantom Buster - Automation Tools",
        "link": "https://phantombuster.com/",
        "stack": "React + GraphQL + AWS",
        "summary": "Contributed to frontend enhancements and performance optimization for lead automation SaaS using React and GraphQL APIs. Handled deployment and scaling on AWS.",
        "feedback": "⭐⭐⭐⭐⭐ 'Solid frontend refactor work. Definitely elevated our UX performance.'",
        img: "/shot/phantom-buster.jpg",

    },
    {
        "title": "Ticketbro - Event Ticketing",
        "link": "https://ticketbro.io/",
        "stack": "TypeScript + Firebase",
        "summary": "Built a scalable ticket booking platform with real-time event tracking, authentication, and cloud database integration using Firebase.",
        "feedback": "⭐⭐⭐⭐ 'Impressive turnaround and excellent communication throughout.'",
        img: "/shot/ticketbro.jpg",

    },
    {
        "title": "Yolo Health - Clinic Management",
        "link": "https://clinic.yolohealth.app/",
        "stack": "Next.js + TypeScript + Supabase",
        "summary": "Developed a responsive clinic management system enabling appointment scheduling, medical records tracking, and patient onboarding. Integrated Supabase for real-time database and authentication.",
        "feedback": "⭐⭐⭐⭐⭐ 'Clean, fast, and user-friendly. Exactly what our clinic needed.'",
        img: "/shot/Yolo-Health.jpg",

    },
    // {
    //     "title": "TimeSheet App - LegalEase",
    //     "link": "https://legal-ease.co/",
    //     "stack": "Next.js + PostgreSQL + Tailwind CSS",
    //     "summary": "Built a legal CRM and timesheet tracking system tailored for law firms. Includes client billing, time logging, and secure access.",
    //     "feedback": "⭐⭐⭐⭐⭐ 'Understood our niche needs and delivered a complete solution.'",
    //     img: "/shot/Time-Sheet.jpg",

    // },
    {
        "title": "Webfirst Timesheet",
        "link": "https://webfirst-timesheet.vercel.app",
        "stack": "Next.js + Tailwind CSS + MongoDB",
        "summary": "Created a time tracking and resource allocation platform to monitor work logs and team productivity. Features user roles and dynamic reporting.",
        "feedback": "⭐⭐⭐⭐ 'Very responsive and got it done right.'",
        img: "/shot/Time-Sheet.jpg",
    },
    // {
    //     "title": "Advisorist - Financial SaaS",
    //     "link": "https://advisorist.net/",
    //     "stack": "Next.js + CRM APIs + PostgreSQL",
    //     "summary": "Delivered a financial lead management system with CRM integration and automated workflows for marketing funnels.",
    //     "feedback": "⭐⭐⭐⭐⭐ 'A true partner in product development. Always dependable.'"
    // },
    // {
    //     "title": "Deal Sourcing Tool",
    //     "link": "https://dealsourcing.vercel.app/",
    //     "stack": "Next.js + Node.js + AI APIs",
    //     "summary": "Built an AI-powered sourcing tool that analyzes market listings and identifies potential acquisition targets based on filters.",
    //     "feedback": "⭐⭐⭐⭐ 'Quick build and good integration of AI logic.'"
    // }
]



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
                    {(loading ? Array.from({ length: 6 }) : projects).map((project: any, i: any) => (
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
                                <a href={project.link} target="_blank">
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
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

        </div>
    );
}
