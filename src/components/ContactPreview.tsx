import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MessageCircle, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "badhonroy172@gmail.com",
    href: "mailto:badhonroy172@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "01783147171",
    href: "tel:01783147171"
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Now",
    href: "https://wa.me/8801783147171"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Dhaka, Bangladesh",
    href: "#"
  }
];

export function ContactPreview() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background"></div>
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-portfolio-accent/3 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 section-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground animate-heading-reveal animate-hover-glow">
            <span className="animate-text-shimmer">Let's Work Together</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
            Ready to bring your project to life? Get in touch and let's discuss how I can help transform your ideas into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <Card 
              key={method.label}
              className="group hover-lift glass-card border-0 shadow-soft backdrop-blur-xl animate-stagger-fade"
              style={{ animationDelay: `${index * 150 + 600}ms` }}
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 hero-gradient rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-medium">
                  <method.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 150 + 750}ms` }}>
                  {method.label}
                </h3>
                {method.href !== "#" ? (
                  <a 
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 block"
                  >
                    {method.value}
                  </a>
                ) : (
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {method.value}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4 sm:space-y-6 animate-scale-in" style={{ animationDelay: "1.2s" }}>
          <Button variant="hero" size="lg" asChild className="shadow-xl w-full sm:w-auto">
            <a href="https://wa.me/8801783147171" target="_blank" rel="noopener noreferrer">
              Start WhatsApp Chat
              <MessageCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </Button>
          
          <div>
            <Button variant="hero-outline" size="lg" asChild className="shadow-large w-full sm:w-auto">
              <Link to="/contact">
                Go to Contact Page
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}