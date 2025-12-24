"use client";

import { RocketIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HireMeNow from "./HireMeNow";
import { TextReveal, AnimatedCounter, ParallaxSection } from "./AnimationComponents";

export default function AboutMe() {
  const [inView, setInView] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -5,
      boxShadow: "0 20px 40px rgba(52, 211, 153, 0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <section 
      className="bg-black text-white py-20 max-w-6xl mx-auto px-6 relative"
      itemScope
      itemType="https://schema.org/Person"
    >
      {/* Animated background */}
      <motion.div
        className="absolute top-20 right-10 w-40 h-40 bg-green-400/5 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <motion.div
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <motion.div className="space-y-6 max-w-xl mb-16" variants={itemVariants}>
          <motion.p
            className="text-sm text-green-400 uppercase tracking-wider font-semibold"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.p>

          <TextReveal delay={0.2}>
            <h2 className="text-lg md:text-2xl font-bold leading-tight" itemProp="about">
              I'm a Senior Software Engineer with over 6 years of experience in building scalable web applications using Node.js, NestJS, Next.js, React, FastAPI, and Python. I specialize in developing high-performance MVPs that have successfully evolved into million-dollar products.
            </h2>
          </TextReveal>

          <TextReveal delay={0.4}>
            <p className="text-gray-400 text-md" itemProp="description">
              I'm focused on delivering results that exceed expectations—from clean, maintainable code to seamless user experiences.
            </p>
          </TextReveal>

          <motion.div variants={itemVariants}>
            <HireMeNow />
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Icon */}
          <motion.div
            className="flex justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.div
              animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <RocketIcon size={150} className="text-teal-400/30" />
            </motion.div>
          </motion.div>

          {/* Right Side - Skills & Stats */}
          <motion.div className="space-y-10" variants={containerVariants}>
            {/* Skills List */}
            <ul className="space-y-4 text-gray-300 text-md">
              {[
                "I'm a full-stack engineer with 6+ Years of commercial experience, currently focused on building AI-ready SSR applications using Next.js, NestJS, Prisma, and PostgreSQL.",
                "I have strong experience developing modular, production-grade SSR boilerplates, ideal for SaaS and AI/ML-powered platforms.",
                "Skilled in building AI features such as chatbots, NLP pipelines, LLM prompt chains, and embeddings using OpenAI and LangChain.",
                "I apply SOLID principles to design adaptive, mobile-first UIs and Docker-ready CI/CD environments on AWS, Heroku, and DigitalOcean.",
                "From intelligent SaaS tools to internal dashboards, I build future-ready systems that scale.",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <motion.span
                    className="text-green-400 mt-1 text-xl flex-shrink-0"
                    whileHover={{ scale: 1.5, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    ●
                  </motion.span>
                  <span className="group-hover:text-green-300 transition-colors" itemProp="knows">
                    {point}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Row */}
            <motion.div
              className="grid grid-cols-3 gap-6 text-center text-white bg-gradient-to-r from-teal-400/10 to-green-400/10 p-8 rounded-xl border border-teal-400/20"
              variants={containerVariants}
            >
              {[
                { from: 0, to: 150, label: "Projects completed", suffix: "+" },
                { from: 0, to: 6, label: "Years experience", suffix: "+" },
                { from: 0, to: 4, label: "Certificates", suffix: "+" },
              ].map((stat, i) => (
                <motion.div key={i} variants={cardVariants}>
                  <motion.p className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    <AnimatedCounter
                      from={stat.from}
                      to={stat.to}
                      suffix={stat.suffix}
                      duration={2}
                    />
                  </motion.p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Figma to Code Section */}
        <motion.div className="mt-20 space-y-8" variants={itemVariants}>
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🎨
              </motion.span>
              Figma → AI-Powered Code Conversion
            </h3>
            <p className="text-gray-400 text-md max-w-2xl">
              Expert in converting Figma designs into clean, production-ready frontend code using modern component libraries and AI-assisted tooling.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
            variants={containerVariants}
          >
            {[
              "Pixel-perfect implementation",
              "Modular and reusable component architecture",
              "Proper state management",
              "Clean folder structure",
              "Optimized UI/UX workflows",
            ].map((feature, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-4 flex items-center gap-3 hover:border-green-400/50 transition-colors"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.span
                  className="text-green-400 text-lg flex-shrink-0"
                  whileHover={{ scale: 1.2 }}
                >
                  ✓
                </motion.span>
                <p className="text-gray-300 text-sm">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* AI-Ready Boilerplates Section */}
        <motion.div className="mt-20 space-y-8" variants={itemVariants}>
          <motion.div className="space-y-4" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <motion.span
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                🤖
              </motion.span>
              AI-Ready Boilerplates & Starter Kits
            </h3>
            <p className="text-gray-400 text-md max-w-2xl">
              Full-stack SSR boilerplates with Next.js, NestJS, Prisma, PostgreSQL production-ready setups for AI/ML applications.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {[
              {
                title: "Production-ready setups",
                description: "AI/ML applications with enterprise-grade architecture",
              },
              {
                title: "Modular architectures",
                description: "Fast MVP launches with scalable component systems",
              },
              {
                title: "Cloud deployment",
                description: "Secure, scalable, and optimized for AWS, Heroku, DigitalOcean",
              },
              {
                title: "Full-stack integration",
                description: "Next.js frontend, NestJS backend, Prisma ORM, PostgreSQL database",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-teal-900/20 to-green-900/20 border border-teal-400/30 rounded-lg p-6 space-y-2 hover:border-green-400/60 transition-all"
                variants={cardVariants}
                whileHover="hover"
              >
                <h4 className="text-green-400 font-bold text-lg">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
