import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { siteConfig } from "@/lib/site-config";

const legalLinks = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-board-border)] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="inline-block hover:opacity-90 transition-opacity">
              <Logo size="sm" />
            </Link>
            <p className="mt-3 text-sm text-[var(--color-board-muted)] max-w-xs">
              Enterprise technology consulting and custom software development.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-14 gap-y-8">
            <div className="flex flex-col gap-2">
              <span className="corp-eyebrow">Navigate</span>
              {siteConfig.navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-sm text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
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
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[var(--color-board-border)]">
          <p className="text-xs text-[var(--color-board-muted)]">
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
