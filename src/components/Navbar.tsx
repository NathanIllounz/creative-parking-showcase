import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { productCategories } from "@/constants/products";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Creative Parking Ltd" className="h-10 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive("/") ? "text-primary" : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <Link
                to="/products"
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md flex items-center gap-1 ${
                  location.pathname.startsWith("/products") ? "text-primary" : "text-secondary-foreground/80 hover:text-primary"
                }`}
              >
                Products <ChevronDown size={14} />
              </Link>
              {productsOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card rounded-lg shadow-xl border border-border p-2 min-w-[220px]">
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.id}
                        to={`/products?category=${cat.id}`}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-muted rounded-md transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        {cat.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive("/services") ? "text-primary" : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                isActive("/projects") ? "text-primary" : "text-secondary-foreground/80 hover:text-primary"
              }`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 text-sm font-semibold gradient-orange text-primary-foreground rounded-md hover:opacity-90 transition-opacity"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-secondary-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 space-y-1">
            <Link to="/" className="block px-4 py-3 text-secondary-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/products" className="block px-4 py-3 text-secondary-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/services" className="block px-4 py-3 text-secondary-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/projects" className="block px-4 py-3 text-secondary-foreground/80 hover:text-primary" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className="block mx-4 mt-2 px-5 py-3 text-center font-semibold gradient-orange text-primary-foreground rounded-md" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
