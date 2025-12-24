/**
 * SEO Configuration for Sheraz Hassan's Portfolio
 * Contains reusable SEO metadata, schema markup, and structured data
 */

export const seoConfig = {
  site: {
    name: "Yasir Iqbal - Full-Stack Engineer",
    url: "https://sherazhassan.dev", // Update with your actual domain
    description: "Senior Full-Stack Engineer with 6+ years of experience building scalable web applications and AI-powered systems",
    image: "https://sherazhassan.dev/portfolio-picture.jpg",
    email: "shearzhassan6379@gmail.com",
    phone: "+923481794020",
  },

  social: {
    github: "https://github.com/Meanmernapp",
    linkedin: "https://linkedin.com/in/sherazdevelopment",
    twitter: "https://twitter.com/sherazhassan",
  },

  expertise: {
    title: "Senior Full-Stack Engineer & AI Developer",
    yearsExperience: "6+",
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
      "Prisma ORM",
      "Docker",
      "AWS",
      "AI/ML Integration",
      "LLM APIs",
      "System Design",
      "Microservices",
      "CI/CD",
      "Agile Development",
    ],
    specialties: [
      "Scalable Web Applications",
      "AI-Ready SSR Systems",
      "MVP Development",
      "SaaS Development",
      "Figma to Code Conversion",
      "Production-Grade Boilerplates",
    ],
  },

  pages: {
    home: {
      title: "Sheraz Hassan - Senior Full-Stack Engineer | AI/ML Developer | 6+ Years Experience",
      description: "Senior Full-Stack Engineer with 6+ years of experience building scalable web applications. Specializing in Next.js, NestJS, React, Node.js, FastAPI, Python, and AI-powered systems.",
      keywords: [
        "Sheraz Hassan",
        "Full Stack Developer",
        "Senior Software Engineer",
        "Next.js Developer",
        "AI Developer",
        "Web Developer",
        "Full Stack Engineer",
      ],
    },
    about: {
      title: "About Sheraz Hassan - Full-Stack Engineer & Developer",
      description: "Learn about Sheraz Hassan's 6+ years of professional experience in building scalable web applications, AI systems, and production-grade solutions.",
    },
    projects: {
      title: "Projects - Sheraz Hassan's Portfolio",
      description: "Explore Sheraz Hassan's portfolio of successful projects ranging from MVPs to million-dollar products built with modern web technologies.",
    },
    contact: {
      title: "Contact Sheraz Hassan - Full-Stack Engineer",
      description: "Get in touch with Sheraz Hassan for full-stack development, AI integration, or consultation services.",
    },
  },

  /**
   * Schema.org structured data for Person
   */
  personSchema: {
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
    email: "shearzhassan6379@gmail.com",
    telephone: "+923481794020",
  },

  /**
   * Schema.org structured data for Organization
   */
  organizationSchema: {
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
  },

  /**
   * BreadcrumbList for navigation SEO
   */
  breadcrumbSchema: {
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
  },
};

/**
 * Utility function to generate Open Graph meta tags
 */
export function generateOGTags(title: string, description: string, image?: string) {
  return {
    "og:title": title,
    "og:description": description,
    "og:image": image || seoConfig.site.image,
    "og:url": seoConfig.site.url,
    "og:type": "website",
    "og:site_name": seoConfig.site.name,
  };
}

/**
 * Utility function to generate Twitter Card meta tags
 */
export function generateTwitterTags(title: string, description: string) {
  return {
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
    "twitter:creator": "@sherazhassan",
    "twitter:site": "@sherazhassan",
  };
}
