import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Resume", href: "/resume" }
];

const services = [
  "Website Development",
  "Landing Page Design", 
  "E‑commerce Website",
  "Vtiger CRM Customization",
  "Web Application Development"
];

const currentYear = new Date().getFullYear();

export function Footer() {
  
  return (
    <footer className="glass-card border-t border-border/20 backdrop-blur-xl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/2 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-portfolio-accent/2 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1 animate-stagger-fade" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center mb-6">
              <img 
                src="/images/logo.png" 
                alt="Badhon Roy Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-muted-foreground text-base mb-6 leading-relaxed">
              Building clean, scalable web apps and business platforms with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/badhonroy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-xl hover:bg-primary/10"
              >
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-stagger-fade" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-lg font-semibold text-foreground mb-6 animate-slide-in-left">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link.name} className="animate-fade-in" style={{ animationDelay: `${index * 50 + 300}ms` }}>
                  <Link
                    to={link.href}
                    className="text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-stagger-fade" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-lg font-semibold text-foreground mb-6 animate-slide-in-left">Services</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={service} className="animate-fade-in" style={{ animationDelay: `${index * 50 + 400}ms` }}>
                  <span className="text-base text-muted-foreground block">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="animate-stagger-fade" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-lg font-semibold text-foreground mb-6 animate-slide-in-left">Contact</h3>
            <ul className="space-y-4">
              <li className="animate-fade-in" style={{ animationDelay: "500ms" }}>
                <a
                  href="tel:01783147171"
                  className="flex items-center text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 p-2 rounded-xl hover:bg-primary/5"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  01783147171
                </a>
              </li>
              <li className="animate-fade-in" style={{ animationDelay: "550ms" }}>
                <a
                  href="mailto:badhonroy172@gmail.com"
                  className="flex items-center text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 p-2 rounded-xl hover:bg-primary/5"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  badhonroy172@gmail.com
                </a>
              </li>
              <li className="animate-fade-in" style={{ animationDelay: "600ms" }}>
                <a
                  href="https://wa.me/8801783147171"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 p-2 rounded-xl hover:bg-primary/5"
                >
                  <ExternalLink className="h-5 w-5 mr-3" />
                  WhatsApp
                </a>
              </li>
              <li className="animate-fade-in" style={{ animationDelay: "650ms" }}>
                <div className="flex items-center text-base text-muted-foreground p-2">
                  <MapPin className="h-5 w-5 mr-3" />
                  Mohammadpur, Dhaka 1207
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-base text-muted-foreground">
              © {currentYear} Badhon Kumar Roy — All rights reserved.
            </p>
            <div className="flex space-x-8 mt-6 md:mt-0">
              <Link
                to="/contact"
                className="text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Contact
              </Link>
              <a
                href="#"
                className="text-base text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}