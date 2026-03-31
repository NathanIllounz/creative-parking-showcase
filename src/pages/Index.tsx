import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products, productCategories } from "@/constants/products";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";
import heroImage from "@/assets/hero-parking.jpg";
import productSimpleLift from "@/assets/product-simple-lift.jpg";
import productSemiAuto from "@/assets/product-semi-auto.jpg";
import productAutomated from "@/assets/product-automated.jpg";
import productSpecial from "@/assets/products/s-vts-1.jpg";
import heroVideo from "@/assets/Elevators_Form_Creative_Parking_Word.mp4";

const categoryImages: Record<string, string> = {
  simple: productSimpleLift,
  "semi-auto": productSemiAuto,
  automated: productAutomated,
  special: productSpecial,
};

const featuredProducts = [products[0], products[14], products[16]];

const Index = () => {
  const [videoFinished, setVideoFinished] = useState(false);
  const { lang } = useLanguage();
  const tr = translations.index;
  const catTr = translations.categories;

  const getCatTitle = (id: string) => catTr[id as keyof typeof catTr]?.[lang] || id;
  const getCatDesc = (id: string) => catTr[`${id}Desc` as keyof typeof catTr]?.[lang] || "";

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <motion.img 
            initial={{ opacity: 0 }}
            animate={{ opacity: videoFinished ? 1 : 0 }}
            transition={{ duration: 1 }}
            src={heroImage} 
            alt="Creative Parking lift system" 
            className="w-full h-full object-cover absolute inset-0" 
          />
          <motion.video 
            autoPlay 
            muted 
            playsInline 
            poster={heroImage}
            onEnded={() => setVideoFinished(true)}
            animate={{ opacity: videoFinished ? 0 : 1 }}
            transition={{ duration: 1 }}
            className="w-full h-full object-cover absolute inset-0"
          >
            <source src={heroVideo} type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-32"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              {t(tr.heroTag, lang)}
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              {t(tr.heroTitle1, lang)}
              <span className="text-gradient-orange">{t(tr.heroTitleHighlight, lang)}</span>
              {t(tr.heroTitle2, lang)}
            </h1>
            <p className="text-lg text-secondary-foreground/70 mb-8 max-w-lg">
              {t(tr.heroDesc, lang)}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                {t(tr.exploreProducts, lang)} <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-secondary-foreground/30 text-secondary-foreground font-semibold rounded-md hover:bg-secondary-foreground/5 transition-colors"
              >
                {t(translations.nav.contactUs, lang)}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="gradient-orange">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20+", label: t(tr.statModels, lang) },
              { value: "3,600", label: t(tr.statCapacity, lang) },
              { value: "45s", label: t(tr.statParkTime, lang) },
              { value: "12mo", label: t(tr.statWarranty, lang) },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display font-bold text-2xl text-primary-foreground">{stat.value}</div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t(tr.ourProducts, lang)}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
                {t(tr.parkingForEveryNeed, lang)}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {productCategories.map((cat, i) => (
              <ScrollReveal key={cat.id} delay={i * 0.1}>
                <Link
                  to={`/products?category=${cat.id}`}
                  className="group block bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={categoryImages[cat.id]}
                      alt={getCatTitle(cat.id)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{getCatTitle(cat.id)}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{getCatDesc(cat.id)}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                      {t(tr.viewProducts, lang)} <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t(tr.featured, lang)}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
                {t(tr.popularModels, lang)}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.1}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t(tr.whyUs, lang)}</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
                {t(tr.builtForReliability, lang)}
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: t(tr.safetyFirst, lang), desc: t(tr.safetyDesc, lang) },
              { icon: Zap, title: t(tr.fastInstallation, lang), desc: t(tr.fastInstallationDesc, lang) },
              { icon: Wrench, title: t(tr.customizable, lang), desc: t(tr.customizableDesc, lang) },
              { icon: CheckCircle, title: t(tr.warranty, lang), desc: t(tr.warrantyDesc, lang) },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 gradient-orange rounded-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-secondary-foreground mb-4">
              {t(tr.ctaTitle, lang)}
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-lg mx-auto">
              {t(tr.ctaDesc, lang)}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity text-lg"
            >
              {t(tr.ctaButton, lang)} <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
