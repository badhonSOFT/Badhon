import { Globe, Palette, ShoppingCart, Settings, Code, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
    <section className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 section-reveal">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-heading-reveal animate-hover-glow">
            <span className="animate-text-shimmer">Services I Provide</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal" style={{ animationDelay: "0.3s" }}>
            Comprehensive web development solutions to help your business grow and succeed in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover-lift glass-card border-0 shadow-soft backdrop-blur-xl animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 hero-gradient rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300 shadow-medium">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 150 + 600}ms` }}>
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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