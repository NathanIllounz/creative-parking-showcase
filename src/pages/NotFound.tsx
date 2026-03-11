import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { lang } = useLanguage();
  const tr = translations.notFound;

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">{t(tr.title, lang)}</h1>
        <p className="mb-4 text-xl text-muted-foreground">{t(tr.desc, lang)}</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {t(tr.backHome, lang)}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
