import { useSearchParams } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCard from "@/components/ProductCard";
import { products, productCategories } from "@/constants/products";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";

  const filtered = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="gradient-charcoal section-padding">
        <div className="container-wide mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Products</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-secondary-foreground mt-2 mb-4">
            Parking Solutions
          </h1>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto">
            From simple hydraulic lifts to fully automated tower systems — explore our complete product range.
          </p>
        </div>
      </section>

      {/* Filters & Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            <button
              onClick={() => setSearchParams({})}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "gradient-orange text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              All Products
            </button>
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.id })}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === cat.id
                    ? "gradient-orange text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product, i) => (
              <ScrollReveal key={product.id} delay={i * 0.05}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
