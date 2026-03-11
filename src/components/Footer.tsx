import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Footer = () => {
  const { lang } = useLanguage();
  const tr = translations.footer;
  const nav = translations.nav;
  const catTr = translations.categories;

  return (
    <footer className="gradient-charcoal text-secondary-foreground">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-orange rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">CP</span>
              </div>
              <span className="font-display font-bold text-lg">CREATIVE PARKING</span>
            </div>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              {t(tr.tagline, lang)}
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t(tr.quickLinks, lang)}</h4>
            <div className="space-y-2.5">
              <Link to="/" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(nav.home, lang)}</Link>
              <Link to="/products" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(nav.products, lang)}</Link>
              <Link to="/services" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(nav.services, lang)}</Link>
              <Link to="/contact" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(nav.contactUs, lang)}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t(tr.productsTitle, lang)}</h4>
            <div className="space-y-2.5">
              <Link to="/products?category=simple" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(catTr.simple, lang)}</Link>
              <Link to="/products?category=semi-auto" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(catTr["semi-auto"], lang)}</Link>
              <Link to="/products?category=automated" className="block text-sm text-secondary-foreground/60 hover:text-primary transition-colors">{t(catTr.automated, lang)}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4">{t(tr.contactTitle, lang)}</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground/60">creativeparkisrael@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground/60">+972 50-874-9988</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-secondary-foreground/60">Creative Parking Ltd.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/40">
            © {new Date().getFullYear()} {t(tr.copyright, lang)}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
