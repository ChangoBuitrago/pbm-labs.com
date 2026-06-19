import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

const companyLinks = [
  { href: "/company", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Engagements" },
  { href: "/contact#form", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-board-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo size="sm" />
            </Link>
            <p className="mt-4 text-sm text-[var(--color-board-muted)] max-w-xs leading-relaxed">
              Enterprise technology consulting and custom software development.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div className="flex flex-col gap-2.5">
              <span className="corp-eyebrow">Company</span>
              {companyLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="corp-eyebrow">Legal</span>
              {legalLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="corp-eyebrow">Email</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--color-board-border)]">
          <p className="text-xs text-[var(--color-board-muted)]">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
