"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/", label: "Company" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800/60 bg-[#060a10]/95 backdrop-blur-lg">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo size="md" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-blue-500/80" />
                )}
              </Link>
            );
          })}
        </div>

        <Button href="/contact#form" variant="primary" size="sm">
          Contact
        </Button>
      </div>
    </nav>
  );
}
