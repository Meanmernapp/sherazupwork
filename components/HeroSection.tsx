"use client";

import { Button } from "@/components/ui/button"; // adjust path as needed
import { ArrowRight, BriefcaseBusiness, RocketIcon } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className=" bg-black text-white flex flex-col justify-center px-6 py-20 md:flex-row md:items-center md:justify-between">
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                {/* Left Side - Text */}
                <div className="max-w-2xl space-y-6">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        My name is <span className="text-teal-400">Sheraz Hassan</span>
                    </h1>
                    <p className="text-gray-400 text-lg">
                        I am a Senior Full Stack Developer with expertise in NestJS, Next.js, Python, Prisma ORM, PostgreSQL, and AWS Cloud services.
                    </p>
                    <Button
                        variant="outline"
                        className="mt-4 border-white text-black hover:bg-white hover:text-black group"
                    >
                        Hire Me Now!
                        <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                </div>

                {/* Right Side - Illustration */}
                <div className="mt-10 md:mt-0 w-full max-w-sm mx-auto md:max-w-md">
                    <div className="flex justify-center md:justify-end">
                        <BriefcaseBusiness size={150} className="text-white/20" />
                    </div>
                </div>
            </div>
        </section>
    );
}
