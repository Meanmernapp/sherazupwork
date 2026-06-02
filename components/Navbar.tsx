"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = ["About", "Projects", "Technologies", "Contacts"];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-white transition hover:text-teal-400"
        >
          Yasir<span className="text-teal-400">.</span>
        </Link>

        <nav className="flex flex-wrap items-center gap-1 sm:gap-2">
          {navLinks.map((link) => {
            const href = link === "About" ? "/" : `/${link.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <Link
                key={link}
                href={href}
                className={`rounded-full px-3 py-1.5 text-sm transition ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
