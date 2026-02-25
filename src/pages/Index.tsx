import { Link } from "react-router-dom";
import { ArrowRight, Shield, Wrench, Zap, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products, productCategories } from "@/constants/products";
import heroImage from "@/assets/hero-parking.jpg";
import productSimpleLift from "@/assets/product-simple-lift.jpg";
import productSemiAuto from "@/assets/product-semi-auto.jpg";
import productAutomated from "@/assets/product-automated.jpg";
import productSpecial from "@/assets/products/s-vts-1.jpg";

const categoryImages: Record<string, string> = {
  simple: productSimpleLift,
  "semi-auto": productSemiAuto,
  automated: productAutomated,
  special: productSpecial,
};

const featuredProducts = [products[0], products[14], products[16]];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Creative Parking lift system" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-secondary/40" />
        </div>
        <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Creative Parking Ltd
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              Space-Saving &{" "}
              <span className="text-gradient-orange">Durable</span>{" "}
              Parking Solutions
            </h1>
            <p className="text-lg text-secondary-foreground/70 mb-8 max-w-lg">
              From simple hydraulic lifts to fully automated tower systems — we engineer innovative parking solutions for every space.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Explore Products <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-secondary-foreground/30 text-secondary-foreground font-semibold rounded-md hover:bg-secondary-foreground/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="gradient-orange">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20+", label: "Product Models" },
              { value: "3,600", label: "Max KG Capacity" },
              { value: "45s", label: "Fastest Park Time" },
              { value: "12mo", label: "Standard Warranty" },
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
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Products</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
                Parking Solutions for Every Need
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
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{cat.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary group-hover:gap-2.5 transition-all">
                      View Products <ArrowRight size={14} />
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
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Featured</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
                Popular Models
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
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Creative Parking</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2">
                Built for Reliability
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Safety First", desc: "Multi-layer safety with anti-fall locks, photocell sensors, and emergency stops on every unit." },
              { icon: Zap, title: "Fast Installation", desc: "Preassembled laser-cut parts mean faster on-site installation and easy relocation." },
              { icon: Wrench, title: "Customizable", desc: "Colors, dimensions, voltage, and capacity — all configurable to your project requirements." },
              { icon: CheckCircle, title: "12-Month Warranty", desc: "Every product backed by a standard warranty with extended options available." },
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
              Ready to Optimize Your Parking Space?
            </h2>
            <p className="text-secondary-foreground/60 mb-8 max-w-lg mx-auto">
              Get in touch with our team to discuss the ideal parking solution for your project.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity text-lg"
            >
              Get a Free Consultation <ArrowRight size={20} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
