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

const currentYear = 2025;

export function Footer() {
  
  return (
    <footer className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 border-t border-slate-200/50 dark:border-slate-700/50">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-lg">Badhon Roy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">Software Engineer</p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Crafting exceptional digital experiences with modern web technologies and innovative solutions.
            </p>
            <a
              href="https://github.com/badhonSOFT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github className="h-5 w-5" />
              <span className="text-sm font-medium">Follow on GitHub</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-semibold text-slate-900 dark:text-white text-sm uppercase tracking-wider">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href="mailto:badhonroy172@gmail.com"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">badhonroy172@gmail.com</span>
              </a>
              <a
                href="tel:01783147171"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">01783147171</span>
              </a>
              <a
                href="https://wa.me/8801783147171"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-green-50 dark:group-hover:bg-green-900/20 transition-colors">
                  <ExternalLink className="h-4 w-4" />
                </div>
                <span className="text-sm">WhatsApp Chat</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">Mohammadpur, Dhaka 1207</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-slate-200/60 dark:border-slate-700/60">
          <div className="text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              © {currentYear} Badhon Kumar Roy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}