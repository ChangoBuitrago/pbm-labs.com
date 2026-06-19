export type Theme = "dark" | "light";
export type Locale = "en" | "es" | "de";
export type CookieConsent = "accepted" | "rejected";

export const STORAGE_KEYS = {
  theme: "pbm-theme",
  locale: "pbm-locale",
  cookieConsent: "pbm-cookie-consent",
} as const;

export const DEFAULT_THEME: Theme = "dark";
export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "es", label: "ES" },
  { code: "de", label: "DE" },
];

export function readStoredTheme(): Theme {
  if (typeof window === "undefined") return DEFAULT_THEME;
  const value = localStorage.getItem(STORAGE_KEYS.theme);
  return value === "light" || value === "dark" ? value : DEFAULT_THEME;
}

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
