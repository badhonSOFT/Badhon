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
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8 pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-portfolio-accent/5"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 hero-gradient rounded-full blur-3xl opacity-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-portfolio-accent rounded-full blur-3xl opacity-10"></div>
      
      <div className="mx-auto max-w-7xl relative z-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl lg:text-8xl animate-heading-reveal leading-none animate-hover-glow font-sf-pro">
              <span className="block animate-slide-in-left" style={{ animationDelay: "0.2s" }}>
                Hi, I'm
              </span>
              <span className="animate-gradient-shift block mt-2" style={{ animationDelay: "0.5s" }}>
                Badhon
              </span>
              <span className="block animate-slide-in-right" style={{ animationDelay: "0.8s" }}>
                — Software Engineer
              </span>
            </h1>
            
            <p className="mt-8 text-xl leading-relaxed text-gray-600 max-w-2xl text-balance animate-slide-up font-light section-reveal font-sf-pro" style={{ animationDelay: "1.1s" }}>
              I craft websites, e‑commerce, and web apps with CodeIgniter, React & PHP.
              Building clean, scalable solutions for businesses worldwide.
            </p>
            
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start animate-scale-in" style={{ animationDelay: "1.4s" }}>
              <Button
                variant="hero"
                size="lg"
                onClick={scrollToProjects}
                className="w-full sm:w-auto min-w-[180px]"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                variant="hero-outline"
                size="lg"
                asChild
                className="w-full sm:w-auto min-w-[180px]"
              >
                <a href="/contact">
                  Contact Me
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 hero-gradient rounded-3xl blur-3xl opacity-30 scale-105"></div>
              <div className="relative glass-card rounded-3xl p-3 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] transform">
                <div className="absolute inset-0 hero-gradient rounded-3xl opacity-5"></div>
                <img
                  src="/images/my_image.jpg"
                  alt="Badhon Kumar Roy - Software Engineer"
                  className="w-80 h-80 lg:w-[420px] lg:h-[420px] object-cover rounded-2xl relative z-10"
                />
                <div className="absolute inset-3 rounded-2xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}