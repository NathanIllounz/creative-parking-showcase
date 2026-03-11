import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Language } from "@/constants/translations";

interface LanguageContextType {
  lang: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggleLanguage: () => {},
  isRTL: false,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("lang");
    return (saved === "he" ? "he" : "en") as Language;
  });

  const isRTL = lang === "he";

  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLanguage = () => setLang((prev) => (prev === "en" ? "he" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

// Helper to get translation value
export const t = (obj: { en: string; he: string }, lang: Language) => obj[lang];
