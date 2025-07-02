"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { RocketIcon } from "lucide-react";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="bg-black text-white py-20  max-w-6xl mx-auto">
      {/* Left Side – Text & CTA */}
      <div className="space-y-6 max-w-xl">
        <p className="text-sm text-green-400 uppercase tracking-wider">
          About Me
        </p>
        <h2 className="text-lg font-bold leading-tight">
          I’m a Senior Software Engineer with over 5 years of experience in building scalable web applications using Node.js, NestJS, Next.js, React, FastAPI, and Python. I specialize in developing high-performance MVPs that have successfully evolved into million-dollar products.
        </h2>
        <p className="text-gray-400 text-md">
          I’m focused on delivering results that exceed expectations—from clean, maintainable code to seamless user experiences.
        </p>
        <Button variant="outline" className="border-white bg-black text-white hover:bg-white hover:text-black">
          Hire Me Now!
        </Button>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center md:justify-start">
          <RocketIcon size={150} className="text-white/20" />
        </div>
        {/* Right Side – Details & Stats */}
        <div className="space-y-10">
          <ul className="space-y-4 text-gray-300 text-md">
            {[
              "I'm a full-stack engineer with 6+ months of commercial experience, currently focused on building AI-ready SSR applications using Next.js, NestJS, Prisma, and PostgreSQL. My work emphasizes clean architecture and scalable systems for fast MVP launches.",
              "I have strong experience developing modular, production-grade SSR boilerplates, ideal for SaaS and AI/ML-powered platforms. I specialize in integrating AI APIs (OpenAI, Gemini, Cohere) and building intelligent workflows with Python (FastAPI, Flask) and TypeScript.",
              "Skilled in building AI features such as chatbots, NLP pipelines, LLM prompt chains, embeddings, and fine-tuning workflows. I’ve used OpenAI, LangChain, and Pinecone/Weaviate to deliver real-time, context-aware interfaces inside web apps.",
              "I apply SOLID principles to design adaptive, mobile-first UIs and server-driven logic. My code is Git-powered and CI/CD-ready, and I work with Dockerized environments hosted on AWS, Heroku, and DigitalOcean.",
              "From intelligent SaaS tools to internal dashboards with automated logic, I build future-ready systems that scale with your business.",
            ].map((point, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-green-400 mt-1">●</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            {[
              { value: "150+", label: "Projects completed" },
              { value: "5+", label: "Years experience" },
              { value: "4+", label: "Certificates" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-bold text-green-400">{stat.value}</p>
                <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
