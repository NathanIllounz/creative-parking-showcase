import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { getProductById } from "@/constants/products";
import { productImages } from "@/constants/productImages";
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(id || "");
  const images = productImages[id || ""] || [];
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={14} /> Back to Products
          </Link>
        </div>
      </div>

      {/* Product Header */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden bg-muted aspect-[4/3]">
                  <img
                    src={images[activeImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {images.length > 1 && (
                  <div className="flex gap-3">
                    {images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImage(i)}
                        className={`rounded-md overflow-hidden border-2 transition-colors w-24 h-20 ${
                          activeImage === i ? "border-primary" : "border-border hover:border-primary/50"
                        }`}
                      >
                        <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-3">
                {product.categoryLabel}
              </span>
              <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
                {product.model}
              </h1>
              <h2 className="font-display text-xl text-muted-foreground mb-4">
                {product.name}
              </h2>
              <p className="text-muted-foreground mb-6">{product.shortDescription}</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
              >
                Request a Quote <ArrowRight size={18} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Features</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {product.features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <div className="flex items-start gap-3 bg-card p-4 rounded-md border border-border">
                  <CheckCircle size={18} className="text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Technical Specifications</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-lg border border-border overflow-hidden max-w-2xl">
              <Table>
                <TableBody>
                  {product.specifications.map((spec) => (
                    <TableRow key={spec.label}>
                      <TableCell className="font-medium text-foreground w-1/3">{spec.label}</TableCell>
                      <TableCell className="text-muted-foreground">{spec.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="px-4 py-3 bg-muted/50 border-t border-border">
                <p className="text-xs text-muted-foreground italic">
                  * Most parameters can be customized based on your requirements.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Safety */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Safety System</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl">
            {product.safetySystem.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-card p-4 rounded-md border border-border">
                  <ShieldCheck size={18} className="text-primary shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <ScrollReveal>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Application Scenarios</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="bg-card rounded-lg border border-border overflow-hidden max-w-2xl">
              <Table>
                <TableBody>
                  {product.applicationScenarios.map((scenario) => (
                    <TableRow key={scenario.label}>
                      <TableCell className="font-medium text-foreground w-1/3">{scenario.label}</TableCell>
                      <TableCell className="text-muted-foreground">{scenario.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <ScrollReveal>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-secondary-foreground mb-4">
              Interested in the {product.model}?
            </h2>
            <p className="text-secondary-foreground/60 mb-8">
              Contact us for pricing, customization options, and project consultations.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 gradient-orange text-primary-foreground font-semibold rounded-md hover:opacity-90 transition-opacity"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
