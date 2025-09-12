import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";
import { Footer7 } from "@/components/ui/footer-7";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const quickLinks = [
  { name: "Home", href: "/" },
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

const portfolioSections = [
  {
    title: "Navigation",
    links: quickLinks,
  },
  {
    title: "Services",
    links: services.map(service => ({ name: service, href: "/#services" })),
  },
  {
    title: "Contact",
    links: [
      { name: "Email", href: "mailto:badhonroy172@gmail.com" },
      { name: "Phone", href: "tel:+8801783147171" },
      { name: "WhatsApp", href: "https://wa.me/8801783147171" },
    ],
  },
];

const portfolioSocialLinks = [
  { icon: <FaGithub className="size-5" />, href: "https://github.com/badhonSOFT", label: "GitHub" },
  { icon: <FaLinkedin className="size-5" />, href: "https://www.linkedin.com/in/badhon-roy-855358381", label: "LinkedIn" },
  { icon: <FaWhatsapp className="size-5" />, href: "https://wa.me/8801783147171", label: "WhatsApp" },
  { icon: <FaEnvelope className="size-5" />, href: "mailto:badhonroy172@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <Footer7
      logo={{
        url: "/",
        src: "/images/logo.png",
        alt: "Badhon Roy Logo",
        title: "",
      }}
      sections={portfolioSections}
      description="Specialized in developing robust web applications, e-commerce platforms, and business solutions using modern technologies including React, PHP, and CodeIgniter."
      socialLinks={portfolioSocialLinks}
      copyright={`© ${new Date().getFullYear()} Badhon Kumar Roy. All rights reserved.`}
      legalLinks={[
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ]}
    />
  );
}