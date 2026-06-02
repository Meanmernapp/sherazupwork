import AboutMe from '@/components/AboutSection'
import ContactAndFooter from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer | MERN/MEAN | Scalable SaaS Engineer",
  description: "Senior Full Stack Engineer with 7+ years of experience building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms using React.js, Next.js, Angular, Node.js, NestJS, TypeScript, AWS, Docker, microservices, GraphQL, LLM, and RAG.",
  keywords: [
    "Muhammad Yasir Aqeel",
    "Yasir Aqeel",
    "Full Stack Developer",
    "Senior Software Engineer",
    "Scalable SaaS Engineer",
    "Next.js Developer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Python Developer",
    "MERN Stack",
    "MEAN Stack",
    "AI Developer",
    "LLM Developer",
    "RAG Developer",
    "Web Developer",
    "Full Stack Engineer",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "Microservices",
    "Docker",
    "Kubernetes",
    "Kafka",
    "AWS Developer",
    "SaaS Developer",
  ],
  authors: [{ name: "Muhammad Yasir Aqeel" }],
  creator: "Muhammad Yasir Aqeel",
  publisher: "Muhammad Yasir Aqeel",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sherazhassan.dev",
    siteName: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
    title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer | Scalable SaaS Engineer",
    description: "7+ years building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms with React, Next.js, Angular, Node.js, NestJS, AWS, Docker, GraphQL, LLM, and RAG.",
    images: [
      {
        url: "https://sherazhassan.dev/portfolio-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
    description: "Building scalable SaaS, AI-powered systems, and enterprise platforms. 7+ years of professional experience.",
    images: {
      url: "https://sherazhassan.dev/portfolio-picture.jpg",
      alt: "Muhammad Yasir Aqeel",
    },
  },
  alternates: {
    canonical: "https://sherazhassan.dev",
  },
  category: "Technology",
};

const Home = () => {
  return (
    <div>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Muhammad Yasir Aqeel",
            url: "https://sherazhassan.dev",
            image: "https://sherazhassan.dev/portfolio-picture.jpg",
            description: "Senior Full Stack Engineer with 7+ years of experience building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms.",
            jobTitle: "Senior Full Stack Engineer",
            birthDate: "",
            nationality: "Pakistani",
            knowsLanguage: ["English", "Urdu"],
            sameAs: [
              "https://github.com/Meanmernapp",
              "https://www.linkedin.com/in/muhammad-yasir-aqeel-32a602413",
            ],
            workLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
                addressLocality: "Lahore",
              },
            },
            alumniOf: {
              "@type": "Organization",
              name: "Self-taught & Professional Development",
            },
            hasOccupation: {
              "@type": "Occupation",
              name: "Full-Stack Software Engineer",
              occupationLocation: {
                "@type": "AdministrativeArea",
                name: "Remote",
              },
            },
            skills: [
              "Full Stack Development",
              "Node.js",
              "NestJS",
              "Next.js",
              "React",
              "Python",
              "FastAPI",
              "Angular",
              "TypeScript",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "Kubernetes",
              "AWS",
              "GraphQL",
              "Kafka",
              "Microservices",
              "LLM",
              "RAG",
              "LangChain",
              "System Design",
              "CI/CD",
              "React Native",
            ],
            email: "codewith.yasiraqeel@gmail.com",
          }),
        }}
      />

      {/* BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://sherazhassan.dev",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://sherazhassan.dev#about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Projects",
                item: "https://sherazhassan.dev/projects",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Contact",
                item: "https://sherazhassan.dev#contact",
              },
            ],
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
            url: "https://sherazhassan.dev",
            logo: "https://sherazhassan.dev/globe.svg",
            description: "Professional Senior Full Stack Engineer specializing in scalable SaaS, AI-powered systems, microservices, cloud delivery, and enterprise platforms.",
            sameAs: [
              "https://github.com/Meanmernapp",
              "https://www.linkedin.com/in/muhammad-yasir-aqeel-32a602413",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Professional Services",
              email: "codewith.yasiraqeel@gmail.com",
            },
          }),
        }}
      />

      <HeroSection />
      <AboutMe />
      <ContactAndFooter />
    </div>
  )
}

export default Home
