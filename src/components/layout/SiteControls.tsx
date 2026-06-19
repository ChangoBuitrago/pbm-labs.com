"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { LOCALES } from "@/lib/preferences";
import { useSite } from "@/components/providers/SiteProvider";

export function NavbarControls({ className = "" }: { className?: string }) {
  const { theme, toggleTheme, locale, setLocale, t, mounted } = useSite();

  if (!mounted) {
    return <div className={`h-9 w-[7.5rem] ${className}`} aria-hidden />;
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={toggleTheme}
        className="inline-flex items-center justify-center w-9 h-9 rounded-md text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] hover:bg-[var(--color-board-surface)] transition-colors"
        aria-label={theme === "dark" ? t.nav.themeLight : t.nav.themeDark}
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4" strokeWidth={1.5} />
        ) : (
          <Moon className="w-4 h-4" strokeWidth={1.5} />
        )}
      </button>

      <div
        className="flex items-center rounded-md border border-[var(--color-board-border)] p-0.5"
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
