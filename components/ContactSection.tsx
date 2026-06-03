"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import HireMeNow from "./HireMeNow";

const resumeSpecializations = [
  "Full Stack Development - React.js, Next.js, Angular, TypeScript, and performance-optimized responsive UIs.",
  "Backend & APIs - Node.js, NestJS, Python, FastAPI, REST, GraphQL, WebSockets, JWT, OAuth2, and RBAC.",
  "Databases - PostgreSQL, MongoDB, MySQL, Redis, Prisma ORM, modeling, query optimization, and ETL pipelines.",
  "Cloud & DevOps - AWS, Docker, Kubernetes, GitHub Actions, CI/CD, Nginx, Vercel, and Linux deployments.",
  "Architecture - Microservices, Kafka, event-driven design, serverless, multi-tenant SaaS, and system design.",
  "AI & LLMs - OpenAI, Claude, LangChain, RAG, agentic workflows, vector DBs, AI voice agents, and n8n automation.",
  "Delivery Impact - 30% faster time-to-market, 40% lower API latency, 50% faster release cycles.",
  "Remote Leadership - 3+ years with US cross-functional teams; mentoring, Agile/Scrum, and global time zones.",
];

export default function ContactFooterSpecialization() {
  return (
    <>
      <section className="px-5 py-20 md:px-10">
        <div className="mx-auto max-w-6xl">
          <p className="section-eyebrow mb-3">02 — Expertise</p>
          <h2 className="section-title mb-12">What I specialize in</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {resumeSpecializations.map((item, index) => (
              <div
                key={index}
                className="card-surface flex gap-3 p-5 transition hover:border-violet-500/30"
              >
                <CheckCircle2 className="mt-0.5 shrink-0 text-amber-400" size={18} />
                <p className="text-sm text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-5 mb-20 md:mx-10">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-950/80 via-[#141820] to-[#0a0c10] p-10 text-center md:p-16">
          <p className="section-eyebrow mb-4">Let&apos;s build</p>
          <h2 className="text-3xl font-bold text-white md:text-5xl">
            Ready to start your next project?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-slate-400">
            Open to full-time, contract, and consulting roles. Based in Pakistan (UTC+5) — available for remote work across all time zones.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:codewithfarhan1@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button className="rounded-full bg-amber-500 px-8 font-semibold text-black hover:bg-amber-400">
                Get In Touch
              </Button>
            </a>
            <HireMeNow />
          </div>
        </div>
      </section>
    </>
  );
}
