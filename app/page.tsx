import AboutMe from '@/components/AboutSection'
import ContactAndFooter from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Yasir Iqbal - Senior Full-Stack Engineer | AI/ML Developer | 6+ Years Experience",
  description: "Senior Full-Stack Engineer with 6+ years of experience building scalable web applications. Specializing in Next.js, NestJS, React, Node.js, FastAPI, Python, and AI-powered systems. Proven track record of developing MVPs that evolved into million-dollar products.",
  keywords: [
    "Yasir Iqbal",
    "Full Stack Developer",
    "Senior Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Python Developer",
    "FastAPI",
    "AI ML Developer",
    "Web Developer",
    "Full Stack Engineer",
    "MERN Stack",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "AWS Developer",
    "SaaS Developer",
    "Startup Developer",
  ],
  authors: [{ name: "Yasir Iqbal" }],
  creator: "Yasir Iqbal",
  publisher: "Yasir Iqbal",
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
    siteName: "Yasir Iqbal - Full-Stack Engineer & AI Developer",
    title: "Yasir Iqbal - Senior Full-Stack Engineer | AI/ML Developer",
    description: "6+ years building scalable web applications, AI-ready systems, and million-dollar products. Next.js, NestJS, React, FastAPI, Python.",
    images: [
      {
        url: "https://sherazhassan.dev/portfolio-picture.jpg",
        width: 1200,
        height: 630,
        alt: "Yasir Iqbal - Full-Stack Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yasir Iqbal - Senior Full-Stack Engineer & AI Developer",
    description: "Building scalable web applications and AI-powered systems. 6+ years of professional experience.",
    creator: "@sherazhassan",
    site: "@sherazhassan",
    images: {
      url: "https://sherazhassan.dev/portfolio-picture.jpg",
      alt: "Yasir Iqbal",
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
            name: "Yasir Iqbal",
            url: "https://sherazhassan.dev",
            image: "https://sherazhassan.dev/portfolio-picture.jpg",
            description: "Senior Full-Stack Engineer with 6+ years of experience building scalable web applications and AI-powered systems",
            jobTitle: "Senior Full-Stack Engineer",
            birthDate: "",
            nationality: "Pakistani",
            knowsLanguage: ["English", "Urdu"],
            sameAs: [
              "https://github.com/Meanmernapp",
              "https://linkedin.com/in/sherazdevelopment",
              "https://twitter.com/sherazhassan",
            ],
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
              "Full Stack Development",
              "Node.js",
              "NestJS",
              "Next.js",
              "React",
              "Python",
              "FastAPI",
              "TypeScript",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "AWS",
              "AI/ML Integration",
              "LLM APIs",
              "System Design",
              "Microservices",
              "CI/CD",
              "Agile Development",
            ],
            email: "shearzhassan6379@gmail.com",
            telephone: "+923481794020",
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
            name: "Yasir Iqbal - Full-Stack Engineer",
            url: "https://sherazhassan.dev",
            logo: "https://sherazhassan.dev/globe.svg",
            description: "Professional Full-Stack Software Engineer specializing in scalable web applications and AI-powered systems",
            sameAs: [
              "https://github.com/Meanmernapp",
              "https://linkedin.com/in/sherazdevelopment",
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Professional Services",
              email: "shearzhassan6379@gmail.com",
              telephone: "+923481794020",
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
