import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, ChevronLeft, ChevronRight, X } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { translations } from "@/constants/translations";
import { useLanguage, t } from "@/contexts/LanguageContext";

import golan1 from "@/assets/projects/golan-1.jpg";
import golan2 from "@/assets/projects/golan-2.jpg";
import golan3 from "@/assets/projects/golan-3.jpg";
import golan4 from "@/assets/projects/golan-4.jpg";
import golan5 from "@/assets/projects/golan-5.jpg";
import golan6 from "@/assets/projects/golan-6.jpg";
import golan7 from "@/assets/projects/golan-7.jpg";
import golan8 from "@/assets/projects/golan-8.jpg";
import golan9 from "@/assets/projects/golan-9.jpg";
import golan10 from "@/assets/projects/golan-10.jpg";

const golanImages = [golan1, golan2, golan3, golan4, golan5, golan6, golan7, golan8, golan9, golan10];

const Projects = () => {
  const { lang } = useLanguage();
  const tr = translations.projectsPage;
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + golanImages.length) % golanImages.length : 0));
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % golanImages.length : 0));

  return (
    <div className="pt-20">
      {/* Hero */}
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

      {/* Golan Hills Project */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <div className="mb-10">
              <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                <MapPin size={16} />
                <span>{t(tr.golanLocation, lang)}</span>
              </div>
              <h2 className="font-display text-3xl font-bold text-foreground mb-2">
                {t(tr.golanTitle, lang)}
              </h2>
              <p className="text-muted-foreground mb-1">{t(tr.golanType, lang)} · {t(tr.golanSpaces, lang)}</p>
              <p className="text-muted-foreground max-w-2xl">{t(tr.golanDesc, lang)}</p>
            </div>
          </ScrollReveal>

          {/* Featured image */}
          <ScrollReveal>
            <div
              className="rounded-lg overflow-hidden mb-6 cursor-pointer"
              onClick={() => openLightbox(0)}
            >
              <img
                src={golanImages[0]}
                alt={t(tr.golanTitle, lang)}
                className="w-full h-[400px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </ScrollReveal>

          {/* Gallery grid */}
          <h3 className="font-display text-xl font-bold text-foreground mb-4">{t(tr.photoGallery, lang)}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {golanImages.slice(1).map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div
                  className="aspect-[3/4] rounded-lg overflow-hidden cursor-pointer group"
                  onClick={() => openLightbox(i + 1)}
                >
                  <img
                    src={img}
                    alt={`${t(tr.golanTitle, lang)} - ${i + 2}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white z-10">
            <X size={32} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white/80 hover:text-white z-10"
          >
            <ChevronLeft size={40} />
          </button>
          <img
            src={golanImages[selectedImage]}
            alt={`${t(tr.golanTitle, lang)} - ${selectedImage + 1}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white/80 hover:text-white z-10"
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-4 text-white/60 text-sm">
            {selectedImage + 1} / {golanImages.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
