import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";
import serviceOdm from "@/assets/service-odm.jpg";
import serviceSupport from "@/assets/service-support.jpg";

const Services = () => {
  const { lang } = useLanguage();
  const tr = translations.services;

  const services = [
    {
      title: t(tr.odmTitle, lang),
      image: serviceOdm,
      description: t(tr.odmDesc, lang),
      highlights: tr.odmHighlights[lang],
    },
    {
      title: t(tr.supportTitle, lang),
      image: serviceSupport,
      description: t(tr.supportDesc, lang),
      highlights: tr.supportHighlights[lang],
    },
  ];

  return (
    <div className="pt-20">
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t(tr.whatWeDo, lang)}</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            {t(tr.ourServices, lang)}
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            {t(tr.servicesDesc, lang)}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto space-y-20">
          {services.map((service, i) => (
            <ScrollReveal key={service.title}>
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="rounded-lg overflow-hidden">
                    <img src={service.image} alt={service.title} className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-sm text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {h}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
              {t(tr.customSolution, lang)}
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-md mx-auto">
              {t(tr.customSolutionDesc, lang)}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              {t(tr.startProject, lang)} <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
