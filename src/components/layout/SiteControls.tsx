"use client";

import Link from "next/link";
import { LOCALES } from "@/lib/preferences";
import { useSite } from "@/components/providers/SiteProvider";

export function NavbarControls({ className = "" }: { className?: string }) {
  const { locale, setLocale, t, mounted } = useSite();

  if (!mounted) {
    return <div className={`h-8 w-[4.75rem] ${className}`} aria-hidden />;
  }

  return (
    <div
      className={`flex items-center rounded-md border border-[var(--color-board-border)] p-0.5 ${className}`}
      role="group"
      aria-label={t.nav.language}
    >
      {LOCALES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`px-2 py-1 text-[11px] font-semibold rounded transition-colors ${
            locale === code
              ? "bg-[var(--color-board-accent)] text-[var(--color-board-bg)]"
              : "text-[var(--color-board-muted)] hover:text-[var(--color-board-text)]"
          }`}
          aria-pressed={locale === code}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function CookieBanner() {
  const { cookieConsent, setCookieConsent, t, mounted } = useSite();

  if (!mounted || cookieConsent) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 md:p-6 pointer-events-none">
      <div className="max-w-3xl mx-auto pointer-events-auto rounded-lg border border-[var(--color-board-border)] bg-[var(--color-board-surface)] shadow-lg p-4 md:p-5">
        <p className="text-sm text-[var(--color-board-muted)] leading-relaxed mb-4">
          {t.cookieBanner.message}{" "}
          <Link
            href="/cookies"
            className="text-[var(--color-board-accent)] hover:brightness-110"
          >
            {t.cookieBanner.learnMore}
          </Link>
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setCookieConsent("accepted")}
            className="h-9 px-4 text-sm font-medium rounded-md bg-[var(--color-board-accent)] text-[var(--color-board-bg)] hover:brightness-110 transition-colors"
          >
            {t.cookieBanner.accept}
          </button>
          <button
            type="button"
            onClick={() => setCookieConsent("rejected")}
            className="h-9 px-4 text-sm font-medium rounded-md border border-[var(--color-board-border)] text-[var(--color-board-silver)] hover:text-[var(--color-board-text)] transition-colors"
          >
            {t.cookieBanner.reject}
          </button>
        </div>
      </div>
    </div>
  );
}
