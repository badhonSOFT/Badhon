import { Card, CardContent } from "@/components/ui/card";
import { Code2, Target, Zap, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, scalable code following best practices"
  },
  {
    icon: Target,
    title: "Problem Solver",
    description: "Focused on solving real business challenges with technology"
  },
  {
    icon: Zap,
    title: "Rapid Delivery",
    description: "Quick turnaround without compromising on quality"
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Understanding business needs to deliver perfect solutions"
  }
];

export function About() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-10 right-10 sm:top-20 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-primary/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-portfolio-accent/3 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="section-reveal text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-6 sm:mb-8 animate-heading-reveal animate-hover-glow">
              <span className="animate-text-shimmer">About Me</span>
            </h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-4 sm:space-y-6 max-w-none">
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed animate-slide-up font-light" style={{ animationDelay: "0.3s" }}>
                I'm a passionate software engineer specializing in web development, 
                with a focus on creating clean, scalable solutions for small and medium enterprises.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed animate-slide-up font-light" style={{ animationDelay: "0.5s" }}>
                With expertise in CodeIgniter, React, and PHP, I help businesses 
                establish their digital presence through custom websites, e-commerce platforms, 
                and web applications that drive real results.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed animate-slide-up font-light" style={{ animationDelay: "0.7s" }}>
                I believe in rapid delivery without compromising quality, 
                ensuring every project is built with clean code and best practices 
                to support long-term growth and maintenance.
              </p>
            </div>
          </div>

          {/* Right Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {highlights.map((highlight, index) => (
              <Card 
                key={highlight.title}
                className="group hover-lift glass-card border-0 shadow-soft backdrop-blur-xl animate-stagger-fade"
                style={{ animationDelay: `${index * 150 + 900}ms` }}
              >
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 hero-gradient rounded-2xl mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-all duration-300 shadow-medium">
                    <highlight.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 150 + 1050}ms` }}>
                    {highlight.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}