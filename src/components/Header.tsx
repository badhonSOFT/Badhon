import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

import heroPortrait from "@/assets/hero-portrait.jpg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" },
];

const WHATSAPP_URL = "https://wa.me/8801783147171";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link 
            to="/" 
            className="group -m-1.5 p-1.5 flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Badhon Roy Logo" 
                className="w-16 h-16 object-contain transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="relative overflow-hidden rounded-xl p-2.5 hover:bg-primary/10 transition-all duration-300 group"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6 text-black transition-transform duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          </Button>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-gray-900 hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
        
        {/* Desktop CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
          <ThemeToggle />
          <Button 
            asChild 
            className="relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-large hover:shadow-xl transition-all duration-300 group button-ripple"
          >
            <Link to="/contact">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </Link>
          </Button>
        </div>
      </nav>

      {/* Enhanced Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div 
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm animate-fade-in" 
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto glass-card backdrop-blur-xl px-6 py-6 sm:max-w-sm border-l border-border/20 animate-slide-in-right">
            <div className="flex items-center justify-between">
              <Link to="/" className="group -m-1.5 p-1.5 flex items-center gap-3">
                <img 
                  src="/images/logo.png" 
                  alt="Badhon Roy Logo" 
                  className="w-12 h-12 object-contain"
                />
                <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  Badhon Roy
                </span>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="relative overflow-hidden -m-2.5 rounded-xl p-2.5 hover:bg-destructive/10 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90" />
              </Button>
            </div>
            
            <div className="mt-8 flow-root">
              <div className="space-y-3">
                {navigation.map((item, index) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 relative overflow-hidden group ${
                        isActive
                          ? "text-primary bg-primary/10 shadow-glow"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <span className="relative z-10 flex items-center gap-3">
                        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          isActive ? 'bg-primary animate-pulse' : 'bg-muted-foreground/30 group-hover:bg-primary'
                        }`} />
                        {item.name}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </Link>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/20">
                <Button 
                  asChild 
                  className="w-full relative overflow-hidden rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-large group button-ripple"
                >
                  <Link to="/contact">
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Sparkles className="h-4 w-4 animate-pulse" />
                      Let's Talk
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}