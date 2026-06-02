import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer | MERN/MEAN | Scalable SaaS Engineer",
  description: "Senior Full Stack Engineer with 7+ years of experience building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms using React.js, Next.js, Angular, Node.js, NestJS, TypeScript, AWS, Docker, microservices, GraphQL, LLM, and RAG.",
  keywords: [
    "Full Stack Engineer",
    "Muhammad Yasir Aqeel",
    "Yasir Aqeel",
    "Software Developer",
    "Next.js",
    "React",
    "Angular",
    "Node.js",
    "NestJS",
    "Python",
    "MERN",
    "MEAN",
    "AI Developer",
    "LLM",
    "RAG",
    "SaaS Engineer",
    "Web Developer",
    "TypeScript",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Kubernetes",
    "Microservices",
    "GraphQL",
  ],
  authors: [{ name: "Muhammad Yasir Aqeel" }],
  creator: "Muhammad Yasir Aqeel",
  publisher: "Muhammad Yasir Aqeel",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sherazhassanupwork.vercel.app",
    siteName: "Muhammad Yasir Aqeel Portfolio",
    title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
    description: "Senior Full Stack Engineer with 7+ years building scalable SaaS, AI, analytics, e-commerce, and enterprise platforms.",
    images: [
      {
        url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Yasir Aqeel - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Yasir Aqeel - Senior Full Stack Engineer",
    description: "7+ years of experience building scalable SaaS, AI-powered systems, and enterprise platforms.",
  },
  alternates: {
    canonical: "https://sherazhassanupwork.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/globe.svg" type="image/svg+xml" />
        <link rel="canonical" href="https://sherazhassanupwork.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
