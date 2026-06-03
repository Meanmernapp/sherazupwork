"use client";

import { motion } from "framer-motion";
import HireMeNow from "./HireMeNow";
import { AnimatedCounter } from "./AnimationComponents";

const highlights = [
  "Frontend: React.js, Next.js (SSR/SSG), Angular, TypeScript, Tailwind CSS, Material UI, Redux Toolkit, Zustand, React Query, responsive design, and performance optimization.",
  "Backend & APIs: Node.js, Express.js, NestJS, Python, FastAPI, Django, Flask, REST APIs, GraphQL, WebSockets, JWT, OAuth2, RBAC, and secure API design.",
  "Databases & cloud: PostgreSQL, MongoDB, MySQL, Redis, Prisma ORM, AWS (EC2, S3, RDS, Lambda, ECS, EKS), Docker, Kubernetes, GitHub Actions, and CI/CD pipelines.",
  "Architecture & AI: Microservices, Kafka, event-driven systems, multi-tenant SaaS, OpenAI, Anthropic Claude, LangChain, RAG, agentic workflows, Pinecone, Weaviate, and n8n automation.",
  "Leadership: Agile/Scrum, technical leadership, mentoring, feature ownership, and 3+ years of fully remote collaboration with US-based cross-functional teams.",
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
              Full stack & AI engineering at scale
            </h2>
          </div>
          <HireMeNow />
        </div>

        <p className="mb-12 max-w-3xl text-lg leading-relaxed text-slate-400" itemProp="description">
          Senior Full Stack and AI Engineer with 8+ years building production-grade web applications across SaaS, AI, analytics, e-commerce, and enterprise domains. Reduced time-to-market by 30%, cut API latency by 40%, and accelerated CI/CD release cycles by 50%. Deep expertise in React.js, Next.js, Node.js, NestJS, TypeScript, Python, PostgreSQL, MongoDB, Redis, GraphQL, Kubernetes, AWS, and Kafka—with hands-on AI work using OpenAI, Claude, LangChain, RAG pipelines, and vector databases.
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
            { from: 0, to: 8, label: "Years", suffix: "+" },
            { from: 0, to: 50, label: "Faster CI/CD", suffix: "%" },
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
            <h3 className="mb-3 text-lg font-bold text-white">AI & LLM Engineering</h3>
            <p className="text-sm text-slate-400">
              OpenAI, Anthropic Claude, LangChain, LlamaIndex, RAG, agentic workflows, prompt engineering, Pinecone, Weaviate, Chroma, and AI voice agents.
            </p>
          </div>
          <div className="card-surface p-6">
            <h3 className="mb-3 text-lg font-bold text-white">Cloud & Architecture</h3>
            <p className="text-sm text-slate-400">
              Microservices, Kafka, SQS/SNS, serverless, multi-tenant SaaS, system design, performance tuning, and production DevOps on AWS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
