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
    <header className="mx-auto max-w-7xl flex justify-between items-center py-6 px-4 md:px-8 lg:px-16">

      <nav className="flex space-x-10">
        {navLinks.map((link) => {

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


      {/* <div className="flex items-center space-x-6">

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center space-x-1 text-sm hover:opacity-80 transition">
              <span>EN</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-black border border-gray-700 text-white">
            <DropdownMenuItem>EN</DropdownMenuItem>

          </DropdownMenuContent>
        </DropdownMenu>


        <a
          href="/Resume_Shearz_Hassan_Full_Stack_Engineer.pdf"
          download
          className="inline-block border border-gray-600 bg-black text-white px-4 py-2 hover:bg-white hover:text-black transition"
        >
          Download CV
        </a>


      </div> */}
    </header>
  );
}
