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
  title: "Awais Hassan - Senior Full Stack Engineer | MERN | MEAN",
  description:
    "Senior Full Stack Engineer with 7+ years specializing in MEAN/MERN stack, scalable web apps, cloud deployments, CI/CD, and AI-powered SaaS integrations. Lahore, Pakistan.",
  keywords: [
    "Awais Hassan",
    "Full Stack Engineer",
    "MERN Stack",
    "MEAN Stack",
    "React.js",
    "Next.js",
    "Angular",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Python",
    "AI Integration",
    "AWS",
    "Docker",
    "Kubernetes",
    "Lahore Pakistan",
  ],
  authors: [{ name: "Awais Hassan" }],
  creator: "Awais Hassan",
  publisher: "Awais Hassan",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sherazhassanupwork.vercel.app",
    siteName: "Awais Hassan Portfolio",
    title: "Awais Hassan - Senior Full Stack Engineer",
    description:
      "7+ years delivering scalable web applications, APIs, cloud systems, and AI integrations.",
    images: [
      {
        url: "https://sherazhassanupwork.vercel.app/portfolio-image.jpg",
        width: 1200,
        height: 630,
        alt: "Awais Hassan - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Awais Hassan - Senior Full Stack Engineer",
    description:
      "Senior Full Stack Engineer | MERN | MEAN | React | Node.js | Cloud | AI Integration",
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
