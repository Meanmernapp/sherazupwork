"use client";

import { motion } from "framer-motion";
import { Globe, MapPin } from "lucide-react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const contacts = [
  {
    label: "LinkedIn",
    sub: "Muhammad Farhan",
    icon: <FaLinkedin size={22} />,
    href: "https://www.linkedin.com/in/muhammad-farhan-01a835413",
  },
  {
    label: "Email",
    sub: "codewithfarhan1@gmail.com",
    icon: <FaEnvelope size={22} />,
    href: "mailto:codewithfarhan1@gmail.com",
  },
  {
    label: "Availability",
    sub: "Open to Remote · All time zones",
    icon: <Globe size={22} />,
    href: "#",
  },
  {
    label: "Location",
    sub: "Pakistan (UTC+5)",
    icon: <MapPin size={22} />,
    href: "#",
  },
];

export default function ContactSection() {
  return (
    <div className="page-wrap">
      <div className="mx-auto max-w-3xl">
        <p className="section-eyebrow mb-3">05 — Contact</p>
        <h2 className="section-title mb-4">Get in touch</h2>
        <p className="mb-12 text-slate-400">
          Available for global remote roles. Reach out via email or LinkedIn.
        </p>

        <div className="grid gap-4">
          {contacts.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`card-surface flex items-center gap-5 p-5 transition hover:border-violet-500/40 ${item.href === "#" ? "pointer-events-none" : ""}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600/20 text-violet-300">
                {item.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{item.label}</p>
                <p className="mt-1 font-medium text-white">{item.sub}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
