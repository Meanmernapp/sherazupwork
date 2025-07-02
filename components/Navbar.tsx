"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu"; // adjust path as per your setup
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = ["About", "Projects", "Technologies", "Contacts"];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-black text-white max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Nav Links */}
      <nav className="flex space-x-10">
        {navLinks.map((link) => {
          // const isActive = pathname === `/${link.toLowerCase()}`;
          const href = link === "About" ? "/" : `/${link.toLowerCase()}`;
          const isActive = pathname === href;

          return (
            <Link
              key={link}
              href={`${link.toLowerCase() !== "about" ? "/" + link.toLowerCase() : "/"}`}
              className="relative text-sm hover:text-white transition"
            >
              {link}
              {isActive && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-teal-400"></span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right: Language & Button */}
      <div className="flex items-center space-x-6">
        {/* Language Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-1 text-sm hover:opacity-80 transition">
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border border-gray-700 text-white">
            <DropdownMenuItem>EN</DropdownMenuItem>
            <DropdownMenuItem>FR</DropdownMenuItem>
            <DropdownMenuItem>DE</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* CV Download */}
        <Button variant="outline" className="border-gray-600 bg-black text-white hover:bg-white hover:text-black transition">
          Download CV
        </Button>
      </div>
    </header>
  );
}
