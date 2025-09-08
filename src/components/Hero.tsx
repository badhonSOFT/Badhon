import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowRight } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";


export function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-portfolio-accent/5"></div>
      <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 hero-gradient rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-portfolio-accent rounded-full blur-3xl opacity-10"></div>
      
      <div className="mx-auto max-w-7xl relative z-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight text-foreground animate-heading-reveal leading-tight animate-hover-glow font-sf-pro">
              <span className="animate-gradient-shift block" style={{ animationDelay: "0.2s" }}>
                Badhon Kumar Roy
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl animate-slide-in-right" style={{ animationDelay: "0.5s" }}>
                Software Engineer
              </span>
            </h1>
            
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-2xl text-balance animate-slide-up font-light section-reveal font-sf-pro mx-auto lg:mx-0" style={{ animationDelay: "0.8s" }}>
              Specialized in developing robust web applications, e-commerce platforms, and business solutions using modern technologies including React, PHP, and CodeIgniter. Delivering scalable, high-performance solutions for global enterprises.
            </p>
            
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start animate-scale-in" style={{ animationDelay: "1.4s" }}>
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              <Button
                variant="hero-outline"
                size="lg"
                asChild
                className="w-full sm:w-auto min-w-[160px] sm:min-w-[180px]"
              >
                <a href="/contact">
                  Contact Me
                  <ExternalLink className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative animate-float">
              <div className="absolute inset-0 hero-gradient rounded-3xl blur-3xl opacity-30 scale-105"></div>
              <div className="relative glass-card rounded-3xl p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] transform">
                <div className="absolute inset-0 hero-gradient rounded-3xl opacity-5"></div>

                <img
                  src="/images/my_image.jpg"
                  alt="Badhon Kumar Roy - Software Engineer"
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] object-cover rounded-2xl relative z-10"
                />
                <div className="absolute inset-2 sm:inset-3 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}