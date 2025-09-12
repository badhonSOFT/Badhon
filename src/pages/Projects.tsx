import { useState, useMemo, useEffect } from "react";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PixelCanvas } from "@/components/ui/pixel-canvas";
import { AnimatedText } from "@/components/ui/animated-text";
import { ExternalLink, Filter } from "lucide-react";

const allProjects = [
  {
    title: "Deepal",
    description: "Car company website with modern design and comprehensive vehicle showcase",
    url: "http://deepal.com.bd/",
    category: "Website",
    tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"]
  },
  {
    title: "GAC",
    description: "Car company website featuring automotive products and services",
    url: "https://gac.com.bd/",
    category: "Website",
    tech: ["CodeIgniter", "MySQL", "JavaScript", "CSS3"]
  },
  {
    title: "Smart VM (SOHUB)",
    description: "Vending machine management portal with real-time monitoring and analytics",
    url: "https://smart-vm.sohub.com.bd/",
    category: "Web App",
    tech: ["CodeIgniter", "MySQL", "Ajax", "Chart.js"]
  },
  {
    title: "SOHUB Connect",
    description: "Website and admin portal for business networking and management",
    url: "https://connect.sohub.com.bd/",
    category: "Web App",
    tech: ["PHP", "MySQL", "Admin Panel", "REST API"]
  },
  {
    title: "Farmers Garden",
    description: "E-commerce website and admin portal for agricultural products",
    url: "https://fg.tolpar.com.bd/",
    category: "E-commerce",
    tech: ["CodeIgniter", "Payment Gateway", "MySQL", "Admin Panel"]
  },
  {
    title: "SOHUB Shop",
    description: "E-commerce website built with WordPress for online shopping",
    url: "https://shop.sohub.com.bd/",
    category: "E-commerce",
    tech: ["WordPress", "WooCommerce", "PHP", "MySQL"]
  },
  {
    title: "Tolpar",
    description: "Vending machine order and machine management portal with admin features",
    url: "https://tolpar.com.bd/",
    category: "Web App",
    tech: ["PHP", "MySQL", "Admin Panel", "Order Management"]
  },
  {
    title: "Ximpul",
    description: "E-commerce website with modern React frontend and Supabase backend",
    url: "https://ximpul.com/",
    category: "E-commerce",
    tech: ["React", "Supabase", "JavaScript", "Admin Panel"]
  }
];

const categories = ["All", "Website", "Web App", "E-commerce"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const filteredProjects = useMemo(() => {
    return selectedCategory === "All" 
      ? allProjects 
      : allProjects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-background page-enter">
      <ScrollProgress />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-portfolio-accent/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-40 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl floating-element-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/3 to-portfolio-accent/3 rounded-full blur-3xl floating-element-slow"></div>
      </div>
      
      <main className="pt-16 relative z-10">
        {/* Hero Section */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="mx-auto max-w-7xl text-center">
            <AnimatedText 
              text="My Projects"
              textClassName="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-foreground"
              underlineGradient="from-primary via-portfolio-accent to-primary"
              underlineHeight="h-1 sm:h-2"
              underlineOffset="-bottom-2 sm:-bottom-4"
              duration={0.08}
              delay={0.05}
            />
            <p className="mt-6 sm:mt-8 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
              A comprehensive showcase of websites, web applications, and e-commerce solutions I've built for clients worldwide
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <Badge variant="secondary" className="px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm glass-card border-0 shadow-soft">
                {allProjects.length} Projects Completed
              </Badge>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-6 sm:mb-8 section-reveal" style={{ animationDelay: "0.4s" }}>
              <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">Filter by Category</h2>
              <p className="text-sm sm:text-base text-muted-foreground">Explore different types of projects</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 section-reveal" style={{ animationDelay: "0.6s" }}>
              <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground mt-2 sm:mt-3" />
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full filter-button px-3 sm:px-4 lg:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-medium"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  {category}
                  {selectedCategory === category && (
                    <span className="ml-1 sm:ml-2 text-xs">({filteredProjects.length})</span>
                  )}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 lg:pb-32">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-12 sm:mb-16 section-reveal" style={{ animationDelay: "0.5s" }}>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 animate-heading-reveal">
                <span className="animate-gradient-shift">Project Showcase</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
                Each project represents a unique solution crafted with attention to detail and modern technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <Card 
                  key={project.title}
                  className="group glass-card border-0 shadow-soft backdrop-blur-xl overflow-hidden relative"
                >
                  <PixelCanvas
                    gap={10}
                    speed={25}
                    colors={['#3b82f6', '#8b5cf6', '#06b6d4']}
                    variant="default"
                    noFocus={true}
                  />
                  <CardContent className="p-4 sm:p-6 lg:p-8 relative z-10">
                    <div className="flex items-start justify-between mb-4 sm:mb-6">
                      <Badge 
                        variant="secondary" 
                        className="text-xs px-2 sm:px-3 py-1 sm:py-1.5 glass-card border-0 shadow-soft font-medium"
                      >
                        {project.category}
                      </Badge>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                      >
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                      </a>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 100 + 400}ms` }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 sm:mb-6 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-6 sm:mb-8">
                      {project.tech.map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="outline" 
                          className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full hover:bg-primary/10 transition-colors animate-stagger-fade"
                          style={{ animationDelay: `${index * 100 + techIndex * 50 + 600}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button
                      variant="hero-outline"
                      size="sm"
                      asChild
                      className="w-full button-ripple group-hover:scale-105 transition-all duration-300 h-9 sm:h-10 text-sm sm:text-base"
                    >
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        View Live Project
                        <ExternalLink className="ml-2 h-3 w-3 sm:h-4 sm:w-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-20 section-reveal" style={{ animationDelay: "0.8s" }}>
              <div className="glass-card rounded-2xl p-8 shadow-large backdrop-blur-xl border-0">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Have a Project in Mind?
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Let's discuss how I can help bring your vision to life with modern technology and clean design.
                </p>
                <Button variant="hero" size="lg" asChild className="shadow-large button-ripple">
                  <a href="/contact">
                    Start Your Project
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Projects;