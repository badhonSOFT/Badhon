import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlowCard } from "@/components/ui/spotlight-card";
import { AnimatedText } from "@/components/ui/animated-shiny-text";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Deepal",
    description: "Car company website with vehicle showcase",
    url: "http://deepal.com.bd/",
    category: "Website",
    tech: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "GAC",
    description: "Car company website with automotive services",
    url: "https://gac.com.bd/",
    category: "Website", 
    tech: ["CodeIgniter", "MySQL", "JavaScript"]
  },
  {
    title: "Smart VM (SOHUB)",
    description: "Vending machine management portal",
    url: "https://smart-vm.sohub.com.bd/",
    category: "Web App",
    tech: ["CodeIgniter", "MySQL", "Ajax"]
  },
  {
    title: "SOHUB Connect",
    description: "Website and admin portal for business management",
    url: "https://connect.sohub.com.bd/",
    category: "Web App",
    tech: ["PHP", "MySQL", "Admin Panel"]
  },
  {
    title: "Farmers Garden",
    description: "E-commerce website and admin portal",
    url: "https://fg.tolpar.com.bd/",
    category: "E-commerce",
    tech: ["CodeIgniter", "Payment Gateway", "Admin Panel"]
  },
  {
    title: "SOHUB Shop",
    description: "E-commerce website built with WordPress",
    url: "https://shop.sohub.com.bd/",
    category: "E-commerce",
    tech: ["WordPress", "WooCommerce", "PHP"]
  },
  {
    title: "Ximpul",
    description: "E-commerce website with React and Supabase",
    url: "https://ximpul.com/",
    category: "E-commerce",
    tech: ["React", "Supabase", "JavaScript"]
  },
  {
    title: "Smart Home",
    description: "Modern e-commerce website with React and TypeScript",
    url: "https://home.sohub.com.bd/",
    category: "E-commerce",
    tech: ["React", "TypeScript", "Supabase"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative min-h-0 overflow-visible">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background pointer-events-none"></div>
      <div className="absolute top-20 right-10 sm:top-40 sm:right-20 w-48 h-48 sm:w-96 sm:h-96 bg-portfolio-accent/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 sm:bottom-40 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl relative z-10 min-h-0">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <AnimatedText 
            text="Featured Projects"
            textClassName="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight"
            gradientColors="linear-gradient(90deg, hsl(var(--primary)), hsl(var(--portfolio-accent)), hsl(var(--primary)))"
            gradientAnimationDuration={2}
            hoverEffect={true}
            className="py-0"
          />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto font-light px-4 sm:px-0">
            A showcase of websites and web applications I've built for clients around the world
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 w-full">
          {featuredProjects.map((project, index) => (
            <GlowCard 
              key={project.title}
              customSize={true}
              glowColor={index % 2 === 0 ? 'blue' : 'purple'}
              className="group w-full h-auto touch-auto"
            >
              <div className="p-4 sm:p-6 lg:p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <Badge variant="secondary" className="text-xs px-2 sm:px-3 py-1 glass-card border-0 shadow-soft">
                    {project.category}
                  </Badge>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
                
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1 sm:gap-1.5 lg:gap-2 mb-3 sm:mb-4 lg:mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs px-1.5 sm:px-2 py-0.5 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-full justify-between p-0 h-auto text-primary hover:text-primary-hover group-hover:translate-x-1 transition-all duration-300 text-xs sm:text-sm"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
                  </a>
                </Button>
              </div>
            </GlowCard>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild className="shadow-large w-full sm:w-auto">
            <Link to="/projects">
              See All Projects
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}