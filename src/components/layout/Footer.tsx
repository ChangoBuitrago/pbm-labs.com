import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

const companyLinks = [
  { href: "/company", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/clients", label: "Clients" },
  { href: "/contact#form", label: "Contact" },
];

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <Link href="/" className="w-fit hover:opacity-90 transition-opacity">
            <Logo size="sm" />
          </Link>

          <div className="flex flex-wrap gap-x-16 gap-y-6">
            <div className="flex flex-col gap-2.5">
              <span className="corp-eyebrow">Company</span>
              {companyLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[var(--color-muted)] hover:text-white transition-colors w-fit"
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
                  className="text-sm text-[var(--color-muted)] hover:text-white transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2.5">
              <span className="corp-eyebrow">Email</span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[var(--color-muted)] hover:text-white transition-colors w-fit"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
          <p className="text-xs text-[var(--color-muted)]/70">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
