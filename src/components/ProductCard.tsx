import { Link } from "react-router-dom";
import { ArrowRight, Weight } from "lucide-react";
import { Product } from "@/constants/products";
import productSimpleLift from "@/assets/product-simple-lift.jpg";
import productSemiAuto from "@/assets/product-semi-auto.jpg";
import productAutomated from "@/assets/product-automated.jpg";

const categoryImages: Record<string, string> = {
  simple: productSimpleLift,
  "semi-auto": productSemiAuto,
  automated: productAutomated,
};

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={categoryImages[product.category]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span className="inline-block text-xs font-semibold uppercase tracking-wider text-primary mb-2">
          {product.categoryLabel}
        </span>
        <h3 className="font-display font-bold text-lg text-foreground mb-1">
          {product.model} — {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Weight size={14} />
            <span>{product.liftingCapacity}</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
            View Details <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
