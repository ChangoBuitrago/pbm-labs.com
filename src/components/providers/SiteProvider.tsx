"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getDictionary, type Dictionary } from "@/lib/i18n";
import {
  DEFAULT_LOCALE,
  DEFAULT_THEME,
  readStoredCookieConsent,
  readStoredLocale,
  readStoredTheme,
  STORAGE_KEYS,
  type CookieConsent,
  type Locale,
  type Theme,
} from "@/lib/preferences";

type SiteContextValue = {
  theme: Theme;
  locale: Locale;
  cookieConsent: CookieConsent | null;
  t: Dictionary;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  setLocale: (locale: Locale) => void;
  setCookieConsent: (consent: CookieConsent) => void;
  mounted: boolean;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(DEFAULT_THEME);
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [cookieConsent, setCookieConsentState] = useState<CookieConsent | null>(
    null,
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setThemeState(readStoredTheme());
    setLocaleState(readStoredLocale());
    setCookieConsentState(readStoredCookieConsent());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(STORAGE_KEYS.theme, theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEYS.locale, locale);
  }, [locale, mounted]);

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const setLocale = useCallback((value: Locale) => {
    setLocaleState(value);
  }, []);

  const setCookieConsent = useCallback((value: CookieConsent) => {
    setCookieConsentState(value);
    localStorage.setItem(STORAGE_KEYS.cookieConsent, value);
  }, []);

  const t = useMemo(() => getDictionary(locale), [locale]);

  const value = useMemo(
    () => ({
      theme,
      locale,
      cookieConsent,
      t,
      setTheme,
      toggleTheme,
      setLocale,
      setCookieConsent,
      mounted,
    }),
    [
      theme,
      locale,
      cookieConsent,
      t,
      setTheme,
      toggleTheme,
      setLocale,
      setCookieConsent,
      mounted,
    ],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used within SiteProvider");
  }
  return context;
}
