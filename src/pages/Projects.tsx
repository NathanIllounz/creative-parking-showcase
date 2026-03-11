import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";
import productSimpleLift from "@/assets/product-simple-lift.jpg";
import productSemiAuto from "@/assets/product-semi-auto.jpg";
import productAutomated from "@/assets/product-automated.jpg";

const Projects = () => {
  const { lang } = useLanguage();
  const tr = translations.projectsPage;

  const projectList = [
    { title: t(tr.project1, lang), type: "PPS Puzzle Parking System", spaces: `120 ${t(tr.spaces, lang)}`, image: productSemiAuto },
    { title: t(tr.project2, lang), type: "IPS In-ground System", spaces: `4 ${t(tr.spaces, lang)}`, image: productSimpleLift },
    { title: t(tr.project3, lang), type: "ATP Automated Tower", spaces: `200 ${t(tr.spaces, lang)}`, image: productAutomated },
    { title: t(tr.project4, lang), type: "RPS Rotary System", spaces: `16 ${t(tr.spaces, lang)}`, image: productAutomated },
    { title: t(tr.project5, lang), type: "TP-270 Simple Lift", spaces: `40 ${t(tr.spaces, lang)}`, image: productSimpleLift },
    { title: t(tr.project6, lang), type: "FP-360 Four Post Lift", spaces: `24 ${t(tr.spaces, lang)}`, image: productSemiAuto },
  ];

  return (
    <div className="pt-20">
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">{t(tr.ourWork, lang)}</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            {t(tr.projects, lang)}
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            {t(tr.projectsDesc, lang)}
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectList.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.05}>
                <div className="bg-card rounded-lg border border-border overflow-hidden group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-display font-bold text-foreground mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium mb-2">{project.type}</p>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <MapPin size={14} />
                      <span>{project.spaces}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
              {t(tr.haveProject, lang)}
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              {t(tr.letsDiscuss, lang)} <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Projects;
