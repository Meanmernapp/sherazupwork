/**
 * SEO Configuration for Awais Hassan's Portfolio
 */

const SITE_URL = "https://sherazhassanupwork.vercel.app";

export const seoConfig = {
  site: {
    name: "Awais Hassan - Senior Full Stack Engineer",
    url: SITE_URL,
    description:
      "Senior Full Stack Engineer with 7+ years specializing in MEAN/MERN stack, cloud deployments, and AI-powered SaaS integrations.",
    image: `${SITE_URL}/portfolio-image.jpg`,
    email: "awaishassan5000@gmail.com",
    phone: "+923703639146",
    location: "Lahore, Pakistan",
  },

  social: {
    linkedin: "https://www.linkedin.com/in/awais-hassan-44a514394",
  },

  expertise: {
    title: "Senior Full Stack Engineer | MERN | MEAN | AI Integration",
    yearsExperience: "7+",
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
      "Electron.js",
      "AI Integration",
    ],
    specialties: [
      "MEAN & MERN Development",
      "System Design & Database Optimization",
      "Cloud, DevOps & CI/CD",
      "AI & LLM Integrations",
      "Technical Leadership & Mentoring",
    ],
  },

  pages: {
    home: {
      title: "Awais Hassan - Senior Full Stack Engineer | MERN | MEAN",
      description:
        "Senior Full Stack Engineer with 7+ years delivering scalable web apps, high-performance APIs, cloud deployments, and AI-powered SaaS features.",
      keywords: [
        "Awais Hassan",
        "Full Stack Developer",
        "Senior Software Engineer",
        "MERN Stack",
        "MEAN Stack",
        "React Developer",
        "Angular Developer",
        "Node.js Developer",
        "Next.js Developer",
        "NestJS Developer",
        "Python Developer",
        "AI Integration",
        "Lahore Pakistan",
      ],
    },
    about: {
      title: "About Awais Hassan - Senior Full Stack Engineer",
      description:
        "Learn about Awais Hassan's 7+ years in MEAN/MERN development, system design, cloud delivery, and AI integration.",
    },
    projects: {
      title: "Projects - Awais Hassan Portfolio",
      description:
        "Explore Awais Hassan's portfolio of scalable web applications, SaaS platforms, and full-stack projects.",
    },
    contact: {
      title: "Contact Awais Hassan - Senior Full Stack Engineer",
      description:
        "Contact Awais Hassan for full-stack development, cloud engineering, AI integration, or consultation. Lahore, Pakistan.",
    },
  },

  personSchema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Awais Hassan",
    url: SITE_URL,
    image: `${SITE_URL}/portfolio-image.jpg`,
    description:
      "Senior Full Stack Engineer with 7+ years specializing in MEAN/MERN stack, cloud deployments, and AI integrations.",
    jobTitle: "Senior Full Stack Engineer",
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
    email: "awaishassan5000@gmail.com",
    telephone: "+923703639146",
  },

  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Awais Hassan - Senior Full Stack Engineer",
    url: SITE_URL,
    logo: `${SITE_URL}/globe.svg`,
    description:
      "Professional Senior Full Stack Engineer specializing in MEAN/MERN, microservices, cloud, and AI-powered SaaS.",
    sameAs: ["https://www.linkedin.com/in/awais-hassan-44a514394"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      email: "awaishassan5000@gmail.com",
      telephone: "+923703639146",
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
