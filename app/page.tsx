import AboutMe from '@/components/AboutSection'
import ContactAndFooter from '@/components/ContactSection'
import HeroSection from '@/components/HeroSection'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Awais Hassan - Senior Full Stack Engineer | MERN | MEAN",
  description:
    "Senior Full Stack Engineer with 7+ years specializing in MEAN/MERN stack, scalable web apps, cloud deployments, and AI-powered SaaS integrations.",
  keywords: [
    "Awais Hassan",
    "Full Stack Developer",
    "Senior Software Engineer",
    "MERN Stack",
    "MEAN Stack",
    "Next.js Developer",
    "React Developer",
    "Angular Developer",
    "Node.js Developer",
    "NestJS Developer",
    "Python Developer",
    "AI Integration",
    "Web Developer",
    "Full Stack Engineer",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "GraphQL",
    "Microservices",
    "Docker",
    "Kubernetes",
    "Kafka",
    "AWS",
    "GCP",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Awais Hassan" }],
  creator: "Awais Hassan",
  publisher: "Awais Hassan",
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
    siteName: "Awais Hassan - Senior Full Stack Engineer",
    title: "Awais Hassan - Senior Full Stack Engineer | MERN | MEAN",
    description:
      "7+ years delivering scalable web apps, APIs, cloud systems, and AI integrations with React, Node.js, Angular, and Python.",
    images: [
      {
        url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
        width: 1200,
        height: 630,
        alt: "Awais Hassan - Senior Full Stack Engineer",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awais Hassan - Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer | MERN | MEAN | Cloud | AI Integration | Lahore, Pakistan",
    images: {
      url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
      alt: "Awais Hassan",
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
            name: "Awais Hassan",
            url: "https://sherazhassanupwork.vercel.app",
            image: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
            description:
              "Senior Full Stack Engineer with 7+ years specializing in MEAN/MERN stack, cloud deployments, and AI-powered SaaS integrations.",
            jobTitle: "Senior Full Stack Engineer",
            birthDate: "",
            nationality: "Pakistani",
            knowsLanguage: ["English", "Urdu"],
            sameAs: ["https://www.linkedin.com/in/awais-hassan-44a514394"],
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
              "MERN Stack",
              "MEAN Stack",
              "React.js",
              "React Native",
              "Next.js",
              "Angular",
              "Node.js",
              "NestJS",
              "Express.js",
              "TypeScript",
              "Python",
              "GraphQL",
              "REST APIs",
              "Microservices",
              "MySQL",
              "MongoDB",
              "AWS",
              "GCP",
              "Firebase",
              "Docker",
              "Kubernetes",
              "CI/CD",
              "Kafka",
              "Socket.io",
              "AI Integration",
            ],
            email: "awaishassan5000@gmail.com",
            telephone: "+923703639146",
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
            name: "Awais Hassan - Senior Full Stack Engineer",
            url: "https://sherazhassanupwork.vercel.app",
            logo: "https://sherazhassanupwork.vercel.app/globe.svg",
            description:
              "Professional Senior Full Stack Engineer specializing in MEAN/MERN, microservices, cloud, and AI integrations.",
            sameAs: ["https://www.linkedin.com/in/awais-hassan-44a514394"],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Professional Services",
              email: "awaishassan5000@gmail.com",
              telephone: "+923703639146",
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
