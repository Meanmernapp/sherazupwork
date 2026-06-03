/**
 * SEO Configuration for Muhammad Farhan's Portfolio
 */

const SITE_URL = "https://sherazhassanupwork.vercel.app";

export const seoConfig = {
  site: {
    name: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    url: SITE_URL,
    description:
      "Senior Full Stack and AI Engineer with 8+ years building production-grade SaaS, AI, analytics, e-commerce, and enterprise applications.",
    image: `${SITE_URL}/portfolio-image.jpg`,
    email: "codewithfarhan1@gmail.com",
    location: "Pakistan (UTC+5) · Open to Remote",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-farhan-01a835413",
  },

  expertise: {
    title: "Senior Full Stack / AI Engineer",
    yearsExperience: "8+",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "GraphQL",
      "Kubernetes",
      "AWS",
      "Kafka",
      "LangChain",
      "RAG",
      "OpenAI",
      "Microservices",
    ],
    specialties: [
      "Full Stack & AI Engineering",
      "SaaS & Enterprise Platforms",
      "Cloud, DevOps & CI/CD",
      "LLM, RAG & Agentic Workflows",
      "Technical Leadership & Mentoring",
    ],
  },

  pages: {
    home: {
      title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
      description:
        "8+ years delivering scalable web apps, AI integrations, and cloud-native systems. Open to remote roles worldwide.",
      keywords: [
        "Muhammad Farhan",
        "Full Stack Engineer",
        "AI Engineer",
        "Senior Software Engineer",
        "Next.js Developer",
        "React Developer",
        "Node.js Developer",
        "LangChain",
        "RAG",
        "OpenAI",
        "Kubernetes",
        "AWS",
        "Remote Developer Pakistan",
      ],
    },
    about: {
      title: "About Muhammad Farhan - Senior Full Stack / AI Engineer",
      description:
        "Learn about Muhammad Farhan's 8+ years in full-stack development, AI engineering, cloud delivery, and remote collaboration.",
    },
    projects: {
      title: "Projects - Muhammad Farhan Portfolio",
      description:
        "Explore Muhammad Farhan's portfolio of SaaS, AI, analytics, e-commerce, and enterprise full-stack projects.",
    },
    contact: {
      title: "Contact Muhammad Farhan - Senior Full Stack / AI Engineer",
      description:
        "Contact Muhammad Farhan for full-stack development, AI integration, cloud engineering, or consulting. Open to remote.",
    },
  },

  personSchema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Farhan",
    url: SITE_URL,
    image: `${SITE_URL}/portfolio-image.jpg`,
    description:
      "Senior Full Stack and AI Engineer with 8+ years building production-grade web applications across SaaS, AI, analytics, and enterprise domains.",
    jobTitle: "Senior Full Stack / AI Engineer",
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
    email: "codewithfarhan1@gmail.com",
  },

  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    url: SITE_URL,
    logo: `${SITE_URL}/globe.svg`,
    description:
      "Senior Full Stack and AI Engineer specializing in SaaS, LLM integrations, microservices, and cloud-native delivery.",
    sameAs: ["https://www.linkedin.com/in/muhammad-farhan-01a835413"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      email: "codewithfarhan1@gmail.com",
    },
  },

  breadcrumbSchema: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "About", item: `${SITE_URL}#about` },
      { "@type": "ListItem", position: 3, name: "Projects", item: `${SITE_URL}/projects` },
      { "@type": "ListItem", position: 4, name: "Contact", item: `${SITE_URL}/contacts` },
    ],
  },
};

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

export function generateTwitterTags(title: string, description: string) {
  return {
    "twitter:card": "summary_large_image",
    "twitter:title": title,
    "twitter:description": description,
  };
}
