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
  title: "Yasir Iqbal - Senior Full-Stack Engineer | AI/ML Developer",
  description: "Senior Software Engineer with 6+ years of experience building scalable web applications using Node.js, NestJS, Next.js, React, FastAPI, and Python. Specializing in high-performance MVPs and AI-ready SSR applications.",
  keywords: [
    "Full Stack Engineer",
    "Software Developer",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "Python",
    "FastAPI",
    "AI/ML Developer",
    "Web Developer",
    "TypeScript",
    "PostgreSQL",
  ],
  authors: [{ name: "Sheraz Hassan" }],
  creator: "Sheraz Hassan",
  publisher: "Sheraz Hassan",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sherazhassanupwork.vercel.app",
    siteName: "Sheraz Hassan Portfolio",
    title: "Sheraz Hassan - Senior Full-Stack Engineer | AI/ML Developer",
    description: "Senior Software Engineer with 6+ years of experience building scalable web applications and AI-ready systems.",
    images: [
      {
        url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sheraz Hassan - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sheraz Hassan - Senior Full-Stack Engineer",
    description: "6+ years of experience in building scalable web applications and AI-ready systems.",
    creator: "@sherazhassan",
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
        <link rel="canonical" href="v" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
