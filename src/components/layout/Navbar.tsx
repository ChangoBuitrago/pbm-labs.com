"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/company", label: "Company" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Clients" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg)]/90 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-3.5 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[var(--color-muted)] hover:text-slate-200"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-px corp-accent-line rounded-full" />
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
