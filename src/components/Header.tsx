import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RainbowButton } from "@/components/ui/rainbow-button";
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
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-border/50 shadow-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-0.5 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link 
            to="/" 
            className="group -m-1.5 p-1.5 flex items-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <img 
                src="/images/logo.png" 
                alt="Badhon Roy Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 object-contain transition-all duration-300 group-hover:scale-110 dark:hidden"
              />
              <img 
                src="/images/white_logo.png" 
                alt="Badhon Roy Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-12 lg:h-12 object-contain transition-all duration-300 group-hover:scale-110 hidden dark:block"
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
            className="relative overflow-hidden rounded-xl p-2.5 hover:bg-primary/10 transition-all duration-300 group z-50 cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110" />
            ) : (
              <Menu className="h-6 w-6 text-foreground transition-transform duration-300 group-hover:scale-110" />
            )}
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
                    : "text-foreground hover:text-primary"
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
          <RainbowButton asChild size="sm" className="h-8">
            <Link to="/contact">
              Contact
            </Link>
          </RainbowButton>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed top-[4.5rem] left-0 right-0 z-[9998] bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 shadow-lg pointer-events-auto">
          <nav className="px-4 py-4 space-y-1 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-4 rounded-lg text-base font-medium transition-colors min-h-[44px] flex items-center ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-3 mt-3 border-t border-gray-200 dark:border-gray-700">
              <Button asChild className="w-full min-h-[44px]">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Let's Talk
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}