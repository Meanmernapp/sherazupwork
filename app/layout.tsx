import type { Metadata } from "next";
import { DM_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
  description:
    "Senior Full Stack and AI Engineer with 8+ years building SaaS, AI, analytics, e-commerce, and enterprise apps. Open to remote · Pakistan (UTC+5).",
  keywords: [
    "Muhammad Farhan",
    "Full Stack Engineer",
    "AI Engineer",
    "Next.js",
    "React",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Python",
    "LangChain",
    "RAG",
    "OpenAI",
    "Kubernetes",
    "AWS",
    "Remote Developer",
  ],
  authors: [{ name: "Muhammad Farhan" }],
  creator: "Muhammad Farhan",
  publisher: "Muhammad Farhan",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sherazhassanupwork.vercel.app",
    siteName: "Muhammad Farhan Portfolio",
    title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    description:
      "8+ years delivering scalable web apps, AI integrations, and cloud-native systems. Open to remote worldwide.",
    images: [
      {
        url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Farhan - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Farhan - Senior Full Stack / AI Engineer",
    description:
      "Full Stack & AI Engineer | React | Next.js | Node.js | LangChain | RAG | AWS | Remote",
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
        <meta name="theme-color" content="#0a0c10" />
      </head>
      <body
        className={`${dmSans.variable} ${geistMono.variable} font-sans min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
