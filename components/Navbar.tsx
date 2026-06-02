"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = ["About", "Projects", "Technologies", "Contacts"];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-8">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 rounded-2xl border border-white/[0.08] bg-[#141820]/90 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl md:px-6">
        <Link
          href="/"
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-amber-500 text-sm font-bold text-white"
        >
          AH
        </Link>

        <nav className="flex flex-1 items-center justify-center gap-1 overflow-x-auto">
          {navLinks.map((link) => {
            const href = link === "About" ? "/" : `/${link.toLowerCase()}`;
            const isActive = pathname === href;

            return (
              <Link
                key={link}
                href={href}
                className={`whitespace-nowrap px-3 py-2 text-sm font-medium transition md:px-4 ${
                  isActive
                    ? "border-b-2 border-amber-400 text-white"
                    : "text-slate-400 hover:text-violet-300"
                }`}
              >
                {link}
              </Link>
            );
          })}
        </nav>

        <Link
          href="mailto:awaishassan5000@gmail.com"
          className="hidden rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500 sm:inline-block"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
