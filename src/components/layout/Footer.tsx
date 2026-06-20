"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { useSite } from "@/components/providers/SiteProvider";
import { siteConfig } from "@/lib/site-config";

const navItems = [
  { href: "/company", key: "about" as const },
  { href: "/services", key: "services" as const },
  { href: "/work", key: "work" as const },
  { href: "/contact", key: "contact" as const },
];

const legalLinks = [
  { href: "/terms", key: "terms" as const },
  { href: "/privacy", key: "privacy" as const },
  { href: "/cookies", key: "cookies" as const },
];

export function Footer() {
  const { t, openCookiePreferences } = useSite();

  const navLabels = {
    about: t.nav.about,
    services: t.nav.services,
    work: t.nav.work,
    contact: t.nav.contact,
  };

  const legalLabels = {
    terms: t.footer.terms,
    privacy: t.footer.privacy,
    cookies: t.footer.cookies,
  };

  return (
    <footer className="border-t border-[var(--color-board-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo size="sm" />
            </Link>
            <p className="mt-3 text-sm text-[var(--color-board-muted)] max-w-xs">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div className="flex flex-col gap-2">
              <span className="corp-eyebrow">{t.footer.navigate}</span>
              {navItems.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
                >
                  {navLabels[key]}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <span className="corp-eyebrow">{t.footer.legal}</span>
              {legalLinks.map(({ href, key }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
                >
                  {legalLabels[key]}
                </Link>
              ))}
              <button
                type="button"
                onClick={openCookiePreferences}
                className="text-sm text-left text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
              >
                {t.footer.cookiePreferences}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-board-border)]">
          <p className="text-xs text-[var(--color-board-muted)]">
            © 2026 {siteConfig.legalName}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
