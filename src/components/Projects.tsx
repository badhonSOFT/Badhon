import { ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const featuredProjects = [
  {
    title: "Deepal",
    description: "Corporate website for automotive company",
    url: "http://deepal.com.bd/",
    category: "Website",
    tech: ["PHP", "MySQL", "Bootstrap"]
  },
  {
    title: "GAC",
    description: "Modern business website with CMS",
    url: "https://gac.com.bd/",
    category: "Website", 
    tech: ["CodeIgniter", "MySQL", "JavaScript"]
  },
  {
    title: "Smart VM (SOHUB)",
    description: "Vehicle management web application",
    url: "https://smart-vm.sohub.com.bd/",
    category: "Web App",
    tech: ["CodeIgniter", "MySQL", "Ajax"]
  },
  {
    title: "SOHUB Connect",
    description: "Business networking platform",
    url: "https://connect.sohub.com.bd/",
    category: "Web App",
    tech: ["PHP", "MySQL", "REST API"]
  },
  {
    title: "Farmers Garden BD",
    description: "E-commerce platform for agricultural products",
    url: "https://www.farmersgardenbd.com/",
    category: "E-commerce",
    tech: ["CodeIgniter", "Payment Gateway", "MySQL"]
  },
  {
    title: "SOHUB Shop",
    description: "Multi-vendor e-commerce solution",
    url: "https://shop.sohub.com.bd/",
    category: "E-commerce",
    tech: ["PHP", "MySQL", "Payment Integration"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background"></div>
      <div className="absolute top-40 right-20 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 section-reveal">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-heading-reveal animate-hover-glow">
            <span className="animate-text-shimmer">Featured Projects</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal" style={{ animationDelay: "0.3s" }}>
            A showcase of websites and web applications I've built for clients around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover-lift glass-card border-0 shadow-soft backdrop-blur-xl overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="text-xs px-3 py-1 glass-card border-0 shadow-soft">
                    {project.category}
                  </Badge>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 100 + 800}ms` }}>
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs px-2 py-1 rounded-full hover:bg-primary/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="w-full justify-between p-0 h-auto text-primary hover:text-primary-hover group-hover:translate-x-1 transition-all duration-300"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Project
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero-outline" size="lg" asChild className="shadow-large">
            <Link to="/projects">
              See All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}