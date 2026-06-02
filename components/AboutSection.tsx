"use client";

import { motion } from "framer-motion";
import HireMeNow from "./HireMeNow";
import { AnimatedCounter } from "./AnimationComponents";

const highlights = [
  "MEAN & MERN development with React.js, React Native, Next.js, Angular, Node.js, NestJS, Express.js, TypeScript, Material-UI, and Tailwind CSS.",
  "APIs & architecture: REST APIs, GraphQL, microservices, Socket.io, Kafka, Redux, Recoil, and Electron.js for production-grade systems.",
  "Databases & cloud: MySQL, MongoDB, Firebase, AWS, GCP, Docker, Kubernetes, and CI/CD pipelines with testing and observability.",
  "AI integration: Python backends with LLM APIs, conversational systems, and automation workflows embedded in SaaS platforms.",
  "Leadership: leading technical initiatives, mentoring engineers, and delivering end-to-end solutions in distributed remote teams.",
];

export default function AboutMe() {
  return (
    <section
      className="border-y border-white/[0.06] bg-[#0d0f14] py-20 px-5 md:px-10"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-eyebrow mb-3">01 — About</p>
            <h2 className="section-title max-w-2xl" itemProp="about">
              Engineering scalable products end to end
            </h2>
          </div>
          <HireMeNow />
        </div>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-slate-400" itemProp="description">
          Senior Full Stack Engineer with 7+ years specializing in MEAN and MERN stack development—scalable web apps and high-performance APIs with Node.js, Express.js, React, and Angular. Strong in system design, database optimization, and cloud deployments with CI/CD, testing, and observability.
        </p>

        <div className="mb-14 grid gap-4 sm:grid-cols-2">
          {highlights.map((point, index) => (
            <motion.div
              key={index}
              className="card-surface p-5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="mb-3 inline-block font-mono text-xs text-amber-400">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-slate-300" itemProp="knows">
                {point}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {[
            { from: 0, to: 150, label: "Projects", suffix: "+" },
            { from: 0, to: 7, label: "Years", suffix: "+" },
            { from: 0, to: 4, label: "Certificates", suffix: "+" },
          ].map((stat, i) => (
            <div key={i} className="card-surface p-6 text-center">
              <p className="text-3xl font-bold text-violet-400 md:text-4xl">
                <AnimatedCounter from={stat.from} to={stat.to} suffix={stat.suffix} duration={2} />
              </p>
              <p className="mt-2 text-xs uppercase tracking-wider text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="card-surface p-6">
            <h3 className="mb-3 text-lg font-bold text-white">Design → Code</h3>
            <p className="text-sm text-slate-400">
              Figma to production-ready UI with modular components, clean structure, and optimized workflows.
            </p>
          </div>
          <div className="card-surface p-6">
            <h3 className="mb-3 text-lg font-bold text-white">SaaS & AI Foundations</h3>
            <p className="text-sm text-slate-400">
              Next.js, NestJS, Prisma, PostgreSQL, AWS, Docker, CI/CD, GraphQL, and LLM-ready architecture for fast MVPs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
