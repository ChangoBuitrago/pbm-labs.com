"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/company", label: "Company" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Engagements" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-board-border)]/80 bg-[var(--color-board-bg)]/80 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 h-16 max-w-6xl mx-auto">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <Logo size="sm" />
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3.5 py-2 text-[13px] font-medium transition-colors ${
                  isActive
                    ? "text-[var(--color-board-text)]"
                    : "text-[var(--color-board-muted)] hover:text-[var(--color-board-silver)]"
                }`}
              >
                {label}
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
