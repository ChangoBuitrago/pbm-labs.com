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
  cookiePreferencesOpen: boolean;
  t: Dictionary;
  setLocale: (locale: Locale) => void;
  setCookieConsent: (consent: CookieConsent) => void;
  openCookiePreferences: () => void;
  closeCookiePreferences: () => void;
  mounted: boolean;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [cookieConsent, setCookieConsentState] = useState<CookieConsent | null>(
    null,
  );
  const [cookiePreferencesOpen, setCookiePreferencesOpen] = useState(false);
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
    setCookiePreferencesOpen(false);
  }, []);

  const openCookiePreferences = useCallback(() => {
    setCookiePreferencesOpen(true);
  }, []);

  const closeCookiePreferences = useCallback(() => {
    setCookiePreferencesOpen(false);
  }, []);

  const t = useMemo(() => getDictionary(locale), [locale]);

  const value = useMemo(
    () => ({
      locale,
      cookieConsent,
      cookiePreferencesOpen,
      t,
      setLocale,
      setCookieConsent,
      openCookiePreferences,
      closeCookiePreferences,
      mounted,
    }),
    [
      locale,
      cookieConsent,
      cookiePreferencesOpen,
      t,
      setLocale,
      setCookieConsent,
      openCookiePreferences,
      closeCookiePreferences,
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
