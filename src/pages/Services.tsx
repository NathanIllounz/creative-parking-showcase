import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import serviceMachining from "@/assets/service-machining.jpg";
import serviceOdm from "@/assets/service-odm.jpg";
import serviceSupport from "@/assets/service-support.jpg";

const services = [
  {
    title: "Solid Machining Services",
    image: serviceMachining,
    description:
      "With 5 units of 5-Axis CNC machining centers, 2 units of high precision laser cutting machines, and other advanced production equipment, we supply our customers with a wide range of machining services to meet different demands at every stage of production.",
    highlights: ["5-Axis CNC Machining", "High Precision Laser Cutting", "Advanced Production Equipment", "Multi-Stage Production Support"],
  },
  {
    title: "Solid ODM Services",
    image: serviceOdm,
    description:
      "Thanks to our dedicated R&D team, we have designed and developed various kinds of parking products, fulfilling our clients' requirements on every aspect — from scissor lifts to cantilever pit systems.",
    highlights: ["Dedicated R&D Team", "Custom Product Design", "Innovative Engineering", "Full Product Development"],
  },
  {
    title: "Solid Customer Services",
    image: serviceSupport,
    description:
      "As a customer-oriented company, we provide prompt and satisfactory support including product introduction, solution development, drawing support, transaction coordination, on-site installation guidance, and maintenance support.",
    highlights: ["Drawing Support", "On-Site Installation Guidance", "Solution Development", "Maintenance Support"],
  },
];

const Services = () => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Do</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            Our Services
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            From precision machining to full R&D and on-site support — we're with you at every step.
          </p>
        </div>
      </section>

      {/* Services */}
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

      {/* CTA */}
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-secondary-foreground mb-4">
              Need a Custom Solution?
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-md mx-auto">
              Our engineering team is ready to develop a parking solution tailored to your specific requirements.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Start a Project <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Services;
