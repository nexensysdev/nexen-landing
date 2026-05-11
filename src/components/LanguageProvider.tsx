"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
import {
  defaultLanguage,
  type Language,
  translations,
} from "@/lib/i18n";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (typeof translations)[Language];
};

const STORAGE_KEY = "nexen-language";
const LANGUAGE_CHANGE_EVENT = "nexen-language-change";

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getBrowserLanguage(routeLanguage: Language): Language {
  if (typeof window === "undefined") {
    return routeLanguage;
  }

  return window.location.pathname.startsWith("/en") ? "en" : "es";
}

export function LanguageProvider({
  children,
  routeLanguage = defaultLanguage,
}: {
  children: ReactNode;
  routeLanguage?: Language;
}) {
  const language = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("storage", onStoreChange);
      window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

      return () => {
        window.removeEventListener("storage", onStoreChange);
        window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
      };
    },
    () => getBrowserLanguage(routeLanguage),
    () => routeLanguage,
  );

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));

    const { pathname, hash } = window.location;
    const spanishProjectMatch = pathname.match(/^\/proyectos\/([^/]+)$/);
    const englishProjectMatch = pathname.match(/^\/en\/projects\/([^/]+)$/);
    let nextPath = nextLanguage === "en" ? "/en" : "/";

    if (nextLanguage === "en" && spanishProjectMatch) {
      nextPath = `/en/projects/${spanishProjectMatch[1]}`;
    }

    if (nextLanguage === "es" && englishProjectMatch) {
      nextPath = `/proyectos/${englishProjectMatch[1]}`;
    }

    if (window.location.pathname !== nextPath) {
      window.location.href = `${nextPath}${hash}`;
    }
  }, []);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () =>
        setLanguage(language === "es" ? "en" : "es"),
      t: translations[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
