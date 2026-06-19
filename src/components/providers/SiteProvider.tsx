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
  readStoredCookieConsent,
  readStoredLocale,
  STORAGE_KEYS,
  type CookieConsent,
  type Locale,
} from "@/lib/preferences";

type SiteContextValue = {
  locale: Locale;
  cookieConsent: CookieConsent | null;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  setCookieConsent: (consent: CookieConsent) => void;
  mounted: boolean;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [cookieConsent, setCookieConsentState] = useState<CookieConsent | null>(
    null,
  );
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setCookieConsentState(readStoredCookieConsent());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale;
    localStorage.setItem(STORAGE_KEYS.locale, locale);
  }, [locale, mounted]);

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
      locale,
      cookieConsent,
      t,
      setLocale,
      setCookieConsent,
      mounted,
    }),
    [locale, cookieConsent, t, setLocale, setCookieConsent, mounted],
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
