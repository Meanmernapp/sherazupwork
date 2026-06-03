import AboutMe from '@/components/AboutSection'
import ContactAndFooter from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
  description:
    "Senior Full Stack and AI Engineer with 8+ years building SaaS, AI, analytics, e-commerce, and enterprise applications. Open to remote worldwide.",
  keywords: [
    "Muhammad Farhan",
    "Full Stack Developer",
    "AI Engineer",
    "Senior Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Python Developer",
    "LangChain",
    "RAG",
    "OpenAI",
    "Kubernetes",
    "AWS",
    "Remote Developer Pakistan",
  ],
  authors: [{ name: "Muhammad Farhan" }],
  creator: "Muhammad Farhan",
  publisher: "Muhammad Farhan",
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
    url: "https://sherazhassanupwork.vercel.app",
    siteName: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    description:
      "8+ years delivering scalable web apps, AI systems, and cloud-native platforms with React, Node.js, Python, and LangChain.",
    images: [
      {
        url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Farhan - Senior Full Stack / AI Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    description:
      "Full Stack & AI Engineer | React | Next.js | LangChain | RAG | AWS | Open to Remote",
    images: {
      url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
      alt: "Muhammad Farhan",
    },
  },
  alternates: {
    canonical: "https://sherazhassanupwork.vercel.app",
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
            name: "Muhammad Farhan",
            url: "https://sherazhassanupwork.vercel.app",
            image: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
            description:
              "Senior Full Stack and AI Engineer with 8+ years building production-grade SaaS, AI, analytics, e-commerce, and enterprise applications.",
            jobTitle: "Senior Full Stack / AI Engineer",
            birthDate: "",
            nationality: "Pakistani",
            knowsLanguage: ["English", "Urdu"],
            sameAs: ["https://www.linkedin.com/in/muhammad-farhan-01a835413"],
            workLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "PK",
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
              "React.js",
              "Next.js",
              "Node.js",
              "NestJS",
              "TypeScript",
              "Python",
              "FastAPI",
              "PostgreSQL",
              "MongoDB",
              "Redis",
              "GraphQL",
              "Microservices",
              "Kubernetes",
              "AWS",
              "Kafka",
              "OpenAI",
              "LangChain",
              "RAG",
              "Docker",
              "CI/CD",
            ],
            email: "codewithfarhan1@gmail.com",
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
                item: "https://sherazhassanupwork.vercel.app",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://sherazhassanupwork.vercel.app#about",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Projects",
                item: "https://sherazhassanupwork.vercel.app/projects",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Contact",
                item: "https://sherazhassanupwork.vercel.app/contacts",
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
            name: "Muhammad Farhan - Senior Full Stack / AI Engineer",
            url: "https://sherazhassanupwork.vercel.app",
            logo: "https://sherazhassanupwork.vercel.app/globe.svg",
            description:
              "Senior Full Stack and AI Engineer specializing in SaaS, LLM integrations, microservices, and cloud-native delivery.",
            sameAs: ["https://www.linkedin.com/in/muhammad-farhan-01a835413"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Professional Services",
              email: "codewithfarhan1@gmail.com",
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
