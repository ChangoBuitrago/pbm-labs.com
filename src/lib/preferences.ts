export type Locale = "en" | "es" | "de";
export type CookieConsent = "accepted" | "rejected";

export const STORAGE_KEYS = {
  locale: "pbm-locale",
  cookieConsent: "pbm-cookie-consent",
} as const;

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
  { code: "de", label: "DE", name: "Deutsch" },
];

export function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  const value = localStorage.getItem(STORAGE_KEYS.locale);
  return value === "en" || value === "es" || value === "de" ? value : DEFAULT_LOCALE;
}

export function readStoredCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  const value = localStorage.getItem(STORAGE_KEYS.cookieConsent);
  return value === "accepted" || value === "rejected" ? value : null;
}
