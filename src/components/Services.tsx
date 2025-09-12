import { Globe, Palette, ShoppingCart, Settings, Code, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites built with modern technologies and best practices"
  },
  {
    icon: Palette,
    title: "Landing Page Design",
    description: "High-converting landing pages that drive results"
  },
  {
    icon: ShoppingCart,
    title: "E‑commerce Website",
    description: "Full-featured online stores with secure payment integration"
  },
  {
    icon: Settings,
    title: "Vtiger CRM Customization",
    description: "Tailored CRM solutions to streamline your business processes"
  },
  {
    icon: Code,
    title: "Web Application Development",
    description: "Scalable web applications for complex business requirements"
  },
  {
    icon: Database,
    title: "API Integration",
    description: "Seamless third-party integrations and custom API development"
  }
];

export function Services() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-36 h-36 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-36 h-36 sm:w-72 sm:h-72 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 section-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground animate-heading-reveal animate-hover-glow">
            <span className="animate-text-shimmer">Services I Provide</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
            Comprehensive web development solutions to help your business grow and succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift glass-card border-0 shadow-soft backdrop-blur-xl animate-scale-in relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <CardContent className="p-6 sm:p-8 relative z-10">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 hero-gradient rounded-2xl mb-4 sm:mb-6 group-hover:scale-110 transition-all duration-300 shadow-medium">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 150 + 600}ms` }}>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}