"use client";

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import HireMeNow from "./HireMeNow";

const resumeSpecializations = [
  "MEAN & MERN Stack - Scalable web applications and high-performance APIs with Node.js, Express.js, React, and Angular.",
  "System Design & Databases - Performance optimization, MySQL, MongoDB, and production-ready data modeling.",
  "Cloud & DevOps - AWS, GCP, Firebase, Docker, Kubernetes, and CI/CD with testing and observability.",
  "APIs & Microservices - REST APIs, GraphQL, Socket.io, Kafka, and distributed service architecture.",
  "AI Integration - Python backends with LLM APIs, conversational systems, and SaaS automation workflows.",
  "Frontend Engineering - React.js, React Native, Next.js, Angular, Material-UI, Tailwind, Redux, and Recoil.",
  "Mobile & Desktop - React Native and Electron.js for cross-platform product delivery.",
  "Technical Leadership - Leading initiatives, mentoring engineers, and remote end-to-end delivery.",
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
            Open to full-time, contract, and consulting work. Based in Lahore — available remotely worldwide.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:awaishassan5000@gmail.com" target="_blank" rel="noopener noreferrer">
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
