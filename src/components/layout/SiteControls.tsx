"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { LOCALES } from "@/lib/preferences";
import { useSite } from "@/components/providers/SiteProvider";

export function NavbarControls({ className = "" }: { className?: string }) {
  const { locale, setLocale, t, mounted } = useSite();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const current =
    LOCALES.find((item) => item.code === locale) ?? LOCALES[0];

  useEffect(() => {
    if (!open) return;

    function handlePointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!mounted) {
    return <div className={`h-9 w-[5.25rem] ${className}`} aria-hidden />;
  }

  return (
    <div ref={rootRef} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 h-9 pl-2.5 pr-2 rounded-md border border-[var(--color-board-border)] bg-[var(--color-board-surface)]/70 text-[var(--color-board-silver)] hover:text-[var(--color-board-text)] hover:border-[var(--color-board-silver)]/30 transition-colors"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={t.nav.language}
      >
        <Globe className="w-3.5 h-3.5 shrink-0" strokeWidth={1.5} />
        <span className="text-xs font-semibold tracking-wide">{current.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 text-[var(--color-board-muted)] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          strokeWidth={1.5}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t.nav.language}
          className="absolute right-0 top-[calc(100%+6px)] z-50 min-w-[9.5rem] rounded-md border border-[var(--color-board-border)] bg-[var(--color-board-surface)] py-1 shadow-[0_12px_40px_rgba(0,0,0,0.35)]"
        >
          {LOCALES.map(({ code, label, name }) => {
            const isActive = locale === code;
            return (
              <li key={code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-sm transition-colors ${
                    isActive
                      ? "text-[var(--color-board-text)] bg-[var(--color-board-elevated)]/80"
                      : "text-[var(--color-board-muted)] hover:text-[var(--color-board-text)] hover:bg-[var(--color-board-elevated)]/50"
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span className="w-6 text-[11px] font-semibold tracking-wide text-[var(--color-board-accent)]">
                      {label}
                    </span>
                    <span>{name}</span>
                  </span>
                  {isActive && (
                    <Check
                      className="w-3.5 h-3.5 text-[var(--color-board-accent)] shrink-0"
                      strokeWidth={2}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      )}
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
