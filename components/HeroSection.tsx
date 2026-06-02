"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HireMeNow from "./HireMeNow";

const skills = [
  "React", "Next.js", "Angular", "Node.js", "NestJS", "Python",
  "GraphQL", "AWS", "Docker", "Kubernetes", "MongoDB", "Kafka",
];

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden px-5 pb-20 pt-8 md:px-10 md:pt-12"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 24 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-violet-300">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Senior Full Stack Engineer
          </span>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl" itemProp="name">
            Hi, I&apos;m{" "}
            <span className="accent-gradient">Awais Hassan</span>
          </h1>

          <p className="max-w-xl text-lg text-slate-400" itemProp="jobTitle">
            7+ years building scalable MEAN/MERN apps, cloud systems, and AI-powered SaaS — based in Lahore, Pakistan.
          </p>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg border border-white/[0.06] bg-[#141820] px-3 py-1.5 text-xs font-medium text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <HireMeNow />
            <a
              href="/projects"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-slate-200 transition hover:border-violet-400/50 hover:bg-white/5"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="card-surface relative p-8 md:p-10"
          initial={{ opacity: 0, x: 24 }}
          animate={isLoaded ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-violet-600/20 blur-3xl" />
          <p className="mb-6 text-sm font-medium text-slate-500">At a glance</p>
          <div className="space-y-6">
            {[
              { value: "7+", label: "Years experience" },
              { value: "150+", label: "Projects delivered" },
              { value: "MERN/MEAN", label: "Core stack" },
            ].map((item) => (
              <div key={item.label} className="flex items-baseline justify-between border-b border-white/[0.06] pb-4 last:border-0 last:pb-0">
                <span className="text-2xl font-bold text-white md:text-3xl">{item.value}</span>
                <span className="text-sm text-slate-500">{item.label}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-slate-400" itemProp="description">
            React.js, Node.js, NestJS, Express.js, Python, GraphQL, Microservices, MySQL, MongoDB, AWS, GCP, Firebase, Redux, and Socket.io.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
