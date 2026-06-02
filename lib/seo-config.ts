/**
 * SEO Configuration for Muhammad Yasir Aqeel's Portfolio
 * Contains reusable SEO metadata, schema markup, and structured data
 */

export const seoConfig = {
  site: {
    name: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
    url: "https://sherazhassan.dev", // Update with your actual domain
    description: "Senior Full Stack Engineer with 7+ years of experience building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms",
    image: "https://sherazhassan.dev/portfolio-picture.jpg",
    email: "codewith.yasiraqeel@gmail.com",
  },

  social: {
    github: "https://github.com/Meanmernapp",
    linkedin: "https://www.linkedin.com/in/muhammad-yasir-aqeel-32a602413",
  },

  expertise: {
    title: "Senior Full Stack Engineer | MERN/MEAN | Scalable SaaS Engineer",
    yearsExperience: "7+",
    skills: [
      "Full Stack Development",
      "React.js",
      "Angular",
      "Node.js",
      "NestJS",
      "Next.js",
      "Python",
      "FastAPI",
      "TypeScript",
      "MongoDB",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS",
      "GraphQL",
      "Microservices",
      "Kafka",
      "LLM",
      "RAG",
      "LangChain",
      "System Design",
      "CI/CD",
      "React Native",
    ],
    specialties: [
      "Scalable SaaS Engineering",
      "MERN and MEAN Development",
      "Cloud, DevOps, and CI/CD",
      "Microservices and Distributed Systems",
      "LLM and RAG Integrations",
      "AI-Powered Search and Automation",
    ],
  },

  pages: {
    home: {
      title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer | MERN/MEAN | Scalable SaaS Engineer",
      description: "Senior Full Stack Engineer with 7+ years of experience building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms.",
      keywords: [
        "Muhammad Yasir Aqeel",
        "Yasir Aqeel",
        "Full Stack Developer",
        "Senior Software Engineer",
        "Next.js Developer",
        "React Developer",
        "Angular Developer",
        "AI Developer",
        "SaaS Engineer",
        "Web Developer",
        "Full Stack Engineer",
      ],
    },
    about: {
      title: "About Muhammad Yasir Aqeel - Senior Full Stack Engineer",
      description: "Learn about Muhammad Yasir Aqeel's 7+ years of professional experience in scalable SaaS, AI, analytics, e-commerce, and enterprise platforms.",
    },
    projects: {
      title: "Projects - Muhammad Yasir Aqeel Portfolio",
      description: "Explore Muhammad Yasir Aqeel's portfolio of SaaS, AI, analytics, e-commerce, and enterprise projects built with modern web technologies.",
    },
    contact: {
      title: "Contact Muhammad Yasir Aqeel - Senior Full Stack Engineer",
      description: "Get in touch with Muhammad Yasir Aqeel for full-stack development, SaaS engineering, cloud delivery, AI integration, or consultation services.",
    },
  },

  /**
   * Schema.org structured data for Person
   */
  personSchema: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Yasir Aqeel",
    url: "https://sherazhassan.dev",
    image: "https://sherazhassan.dev/portfolio-picture.jpg",
    description: "Senior Full Stack Engineer with 7+ years of experience building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms",
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
    email: "codewith.yasiraqeel@gmail.com",
  },

  /**
   * Schema.org structured data for Organization
   */
  organizationSchema: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
    url: "https://sherazhassan.dev",
    logo: "https://sherazhassan.dev/globe.svg",
    description: "Professional Senior Full Stack Engineer specializing in scalable SaaS, AI-powered systems, microservices, cloud delivery, and enterprise platforms",
    sameAs: [
      "https://github.com/Meanmernapp",
      "https://www.linkedin.com/in/muhammad-yasir-aqeel-32a602413",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional Services",
      email: "codewith.yasiraqeel@gmail.com",
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
  };
}
