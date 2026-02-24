import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import productSimpleLift from "@/assets/product-simple-lift.jpg";
import productSemiAuto from "@/assets/product-semi-auto.jpg";
import productAutomated from "@/assets/product-automated.jpg";

const projectList = [
  {
    title: "Residential Community — Dubai",
    type: "PPS Puzzle Parking System",
    spaces: "120 spaces",
    image: productSemiAuto,
  },
  {
    title: "Private Villa — London",
    type: "IPS In-ground System",
    spaces: "4 spaces",
    image: productSimpleLift,
  },
  {
    title: "Commercial Tower — Singapore",
    type: "ATP Automated Tower",
    spaces: "200 spaces",
    image: productAutomated,
  },
  {
    title: "Shopping Mall — Riyadh",
    type: "RPS Rotary System",
    spaces: "16 spaces",
    image: productAutomated,
  },
  {
    title: "Office Building — Berlin",
    type: "TP-270 Simple Lift",
    spaces: "40 spaces",
    image: productSimpleLift,
  },
  {
    title: "Car Dealership — Sydney",
    type: "FP-360 Four Post Lift",
    spaces: "24 spaces",
    image: productSemiAuto,
  },
];

const Projects = () => {
  return (
    <div className="pt-20">
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Work</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            Projects
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            A selection of parking solutions we've delivered worldwide.
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
              Have a Project in Mind?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Let's Discuss <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Projects;
