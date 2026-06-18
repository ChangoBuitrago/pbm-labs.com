"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Company" },
  { href: "/services", label: "Consulting Services" },
  { href: "/products", label: "Software Products" },
];

function navClass(isActive: boolean) {
  return isActive
    ? "text-white"
    : "text-slate-400 hover:text-white transition-colors";
}

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#020617]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold tracking-tight hover:opacity-80 transition-opacity"
        >
          <div className="w-6 h-6 rounded bg-white flex items-center justify-center">
            <div className="w-2 h-2 bg-slate-900 rounded-sm" />
          </div>
          PBM Labs
          <span className="text-slate-500 font-normal text-sm ml-1 hidden sm:inline">
            LLC
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={navClass(pathname === href)}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex gap-4 items-center">
          <Link
            href="/contact#form"
            className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
