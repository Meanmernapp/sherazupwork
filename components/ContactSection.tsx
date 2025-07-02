"use client";

import { MailIcon, PhoneIcon, MapPinIcon, RocketIcon, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactFooterSpecialization() {
  const specializations = [
    "AI/ML-Integrated Web Applications – Designing and building full-stack applications with integrated AI/ML features using Python (FastAPI, Flask), OpenAI, and LangChain",
    "LLM & NLP Solutions – Implementing chatbots, text generation, summarization, and semantic search using OpenAI, Gemini, Hugging Face, and vector DBs like Pinecone & Weaviate",
    "Full-Stack SSR Development – Building modular and production-ready SSR applications using Next.js, NestJS, Prisma ORM, and PostgreSQL for scalable SaaS products",
    "MVP Development & Rapid Prototyping – Creating fast, scalable MVPs with reusable boilerplates tailored for AI-powered use cases",
    "Automation & Data Workflows – Automating tasks with Python scripts, n8n, and serverless logic to handle ETL, notifications, and real-time triggers",
    "Cloud Deployment & CI/CD – Experience deploying to AWS, GCP, Firebase, and DigitalOcean, with CI/CD pipelines using GitHub Actions and Docker",
    "Multi-Tenant SaaS Architecture – Designing secure, role-based SaaS systems with subscription billing, tenant isolation, and user analytics",
    "Agile & Sprint Execution – Managing tasks via Jira, ClickUp, and custom-built sprint tools, with a focus on delivery, feedback, and iteration",
  ];

  

  return (
    <>
      {/* Specialization Section */}
      <section className="bg-black text-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-sm text-green-400 uppercase tracking-widest">Specializations</p>
            <h2 className="text-2xl  font-extrabold">
              My specialization is as follows:
            </h2>
            <ul className="space-y-4 text-gray-300">
              {specializations.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm ">
                  <CheckCircle2 className="text-green-400 mt-1" size={18} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Icon Graphic */}
          <div className="flex justify-center md:justify-end">
            <RocketIcon size={150} className="text-white/20" />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-black text-white py-24 px-6 md:px-16 text-center">
        <p className="text-sm text-green-400 uppercase tracking-widest mb-4">Collaboration</p>
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-10">
          Let's talk about <br /> collaboration!
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <Button className="bg-green-500 hover:bg-green-600 text-black px-6 py-3">
            Get In Touch
          </Button>
          <Button variant="outline" className="border-white bg-black text-white px-6 py-3 hover:bg-white hover:text-black">
            Hire Me Now!
          </Button>
        </div>
      </section>

     
    </>
  );
}
