import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <div className="w-10 h-10 bg-gradient-hero rounded-full flex items-center justify-center ring-2 ring-primary/30 shadow-glow hover:shadow-elegant transition-shadow">
              <span className="text-white font-extrabold text-lg">BD</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-lg bg-gradient-primary bg-clip-text text-transparent leading-tight">Brentwood Darshani</span>
              <p className="text-xs text-muted-foreground -mt-0.5">South Indian Catering</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => { if (isActive('/')) window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/menu') ? 'text-primary' : 'text-muted-foreground'
              }`}
              onClick={() => { if (isActive('/menu')) window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              Menu
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>11111</span>
            </div>
            <Link to="/contact">
              <Button variant="spice" size="sm">
                Order Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 animate-fade-in">
            <nav className="space-y-3">
              <Link 
                to="/" 
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => { if (isActive('/')) window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive('/menu') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => { if (isActive('/menu')) window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMenuOpen(false); }}
              >
                Menu
              </Link>
              <Link 
                to="/contact" 
                className={`block py-2 text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 border-t border-border/50">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Phone className="w-4 h-4" />
                  <span>11111</span>
                </div>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button variant="spice" size="sm" className="w-full">
                    Order Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;