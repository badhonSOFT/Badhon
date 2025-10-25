import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DottedSurface } from "@/components/ui/dotted-surface";
import { Download, Mail, Phone, MapPin, ExternalLink, GraduationCap, Briefcase, Award } from "lucide-react";

const experiences = [
  {
    title: "Freelance Software Engineer",
    company: "Self-Employed",
    period: "2025 - Present",
    location: "Dhaka, Bangladesh",
    type: "Freelance",
    achievements: [
      "Developed 15+ websites and web applications for various clients",
      "Specialized in CodeIgniter, React, and PHP-based solutions",
      "Built e-commerce platforms with payment gateway integration",
      "Customized Vtiger CRM for multiple business clients",
      "Maintained 98% client satisfaction rate with rapid delivery"
    ]
  }
];

const projects = [
  { name: "Deepal Corporate Website", url: "http://deepal.com.bd/" },
  { name: "GAC Business Platform", url: "https://gac.com.bd/" },
  { name: "Smart VM Web Application", url: "https://smart-vm.sohub.com.bd/" },
  { name: "Farmers Garden E-commerce", url: "https://www.farmersgardenbd.com/" },
  { name: "SOHUB Connect Platform", url: "https://connect.sohub.com.bd/" }
];

const skills = {
  "Programming Languages": ["PHP", "JavaScript", "SQL"],
  "Frameworks & Libraries": ["CodeIgniter", "React"],
  "Frontend Technologies": ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  "Backend & Database": ["MySQL", "Supabase", "REST APIs", "Ajax"],
  "Tools & Technologies": ["Git", "Docker", "Linux", "cPanel"]
};

const Resume = () => {
  const handleDownload = () => {
    try {
      const newWindow = window.open('/cv/CV.pdf', '_blank');
      if (!newWindow) {
        // Fallback if popup is blocked
        const link = document.createElement('a');
        link.href = '/cv/CV.pdf';
        link.download = 'Badhon-Kumar-Roy-CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    } catch (error) {
      console.error('Failed to download resume:', error);
      alert('Unable to download resume. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-background page-enter">
      <ScrollProgress />
      
      {/* 3D Dotted Surface Background */}
      <DottedSurface className="opacity-50 z-0" />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-16 w-80 h-80 bg-primary/5 rounded-full blur-3xl floating-element"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-portfolio-accent/5 rounded-full blur-3xl floating-element-delayed"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-primary/3 to-portfolio-accent/3 rounded-full blur-3xl floating-element-slow"></div>
      </div>
      
      <main className="pt-16 relative z-10">
        {/* Hero Header */}
        <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="mx-auto max-w-5xl">
            {/* Main Title */}
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground animate-heading-reveal animate-hover-glow mb-4 sm:mb-6">
                <span className="animate-text-shimmer">Badhon Kumar Roy</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-primary font-semibold mb-4 sm:mb-8 animate-slide-up" style={{ animationDelay: "0.3s" }}>
                Software Engineer & Web Developer
              </p>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up px-4 sm:px-0" style={{ animationDelay: "0.5s" }}>
                4+ years of expertise in creating scalable web solutions for businesses worldwide
              </p>
            </div>

            {/* Download Button */}
            <div className="text-center animate-scale-in" style={{ animationDelay: "0.7s" }}>
              <Button 
                variant="hero" 
                size="lg"
                onClick={handleDownload} 
                className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold button-ripple hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        <div className="px-6 lg:px-8 py-20">
          <div className="mx-auto max-w-5xl space-y-20">
            {/* Professional Summary */}
            <section className="section-reveal" style={{ animationDelay: "0.2s" }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 animate-heading-reveal flex items-center justify-center">
                  <Award className="mr-4 h-8 w-8 text-primary animate-float" />
                  <span className="animate-gradient-shift">Professional Summary</span>
                </h2>
                <p className="text-muted-foreground text-lg">My expertise and professional background</p>
              </div>
              
              <Card className="glass-card border-0 shadow-xl backdrop-blur-xl card-hover-glow">
                <CardContent className="p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="text-center contact-card-enter" style={{ animationDelay: "0.3s" }}>
                      <div className="text-3xl font-bold text-primary mb-2">4+</div>
                      <p className="text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="text-center contact-card-enter" style={{ animationDelay: "0.4s" }}>
                      <div className="text-3xl font-bold text-primary mb-2">15+</div>
                      <p className="text-muted-foreground">Projects Completed</p>
                    </div>
                    <div className="text-center contact-card-enter" style={{ animationDelay: "0.5s" }}>
                      <div className="text-3xl font-bold text-primary mb-2">98%</div>
                      <p className="text-muted-foreground">Client Satisfaction</p>
                    </div>
                  </div>
                  
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
                  
                  <p className="text-muted-foreground leading-relaxed text-lg text-center max-w-4xl mx-auto form-field" style={{ animationDelay: "0.6s" }}>
                    Experienced Software Engineer with 4+ years of expertise in web development, 
                    specializing in CodeIgniter, React, and PHP-based solutions. Proven track record 
                    of delivering clean, scalable web applications and e-commerce platforms for SMEs. 
                    Strong focus on rapid delivery without compromising quality, with extensive 
                    experience in CRM customization and business platform development.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Experience */}
            <section className="section-reveal" style={{ animationDelay: "0.4s" }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 animate-heading-reveal flex items-center justify-center">
                  <Briefcase className="mr-4 h-8 w-8 text-primary animate-float" style={{ animationDelay: "1s" }} />
                  <span className="animate-gradient-shift">Professional Experience</span>
                </h2>
                <p className="text-muted-foreground text-lg">My journey in software development</p>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Card key={index} className="glass-card border-0 shadow-xl backdrop-blur-xl card-hover-glow project-grid-enter" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                    <CardContent className="p-10">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-foreground mb-2 animate-slide-in-left" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                            {exp.title}
                          </h3>
                          <p className="text-primary font-semibold text-lg mb-2 animate-slide-in-left" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                            {exp.company}
                          </p>
                          <div className="flex items-center space-x-4 text-muted-foreground animate-slide-in-left" style={{ animationDelay: `${0.8 + index * 0.1}s` }}>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {exp.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col lg:items-end mt-4 lg:mt-0 space-y-2">
                          <Badge variant="secondary" className="px-4 py-2 glass-card border-0 shadow-soft text-sm font-medium animate-scale-in" style={{ animationDelay: `${0.9 + index * 0.1}s` }}>
                            {exp.period}
                          </Badge>
                          <Badge variant="outline" className="px-4 py-2 text-sm animate-scale-in" style={{ animationDelay: `${1.0 + index * 0.1}s` }}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
                      
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-foreground mb-4">Key Achievements</h4>
                        <div className="grid grid-cols-1 gap-4">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start space-x-3 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors animate-stagger-fade" style={{ animationDelay: `${1.1 + i * 0.1}s` }}>
                              <div className="flex items-center justify-center w-6 h-6 bg-primary/20 rounded-full mt-0.5">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              </div>
                              <p className="text-muted-foreground leading-relaxed flex-1">{achievement}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Education */}
            <section className="section-reveal" style={{ animationDelay: "0.6s" }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 animate-heading-reveal flex items-center justify-center">
                  <GraduationCap className="mr-4 h-8 w-8 text-primary animate-float" style={{ animationDelay: "2s" }} />
                  <span className="animate-gradient-shift">Education</span>
                </h2>
                <p className="text-muted-foreground text-lg">Academic foundation in computer science</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="glass-card border-0 shadow-xl backdrop-blur-xl card-hover-glow project-grid-enter" style={{ animationDelay: "0.7s" }}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-portfolio-accent/20 rounded-2xl mr-4">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <Badge variant="secondary" className="glass-card border-0 shadow-soft">Bachelor's Degree</Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 animate-slide-in-left" style={{ animationDelay: "0.8s" }}>
                      B.Sc. in Computer Science & Engineering
                    </h3>
                    <p className="text-primary font-semibold mb-3 animate-slide-in-left" style={{ animationDelay: "0.9s" }}>
                      World University of Bangladesh
                    </p>
                    <div className="flex items-center text-muted-foreground animate-slide-in-left" style={{ animationDelay: "1s" }}>
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">2024 - 2027</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-0 shadow-xl backdrop-blur-xl card-hover-glow project-grid-enter" style={{ animationDelay: "0.8s" }}>
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-portfolio-accent/20 to-primary/20 rounded-2xl mr-4">
                        <GraduationCap className="h-8 w-8 text-portfolio-accent" />
                      </div>
                      <div>
                        <Badge variant="outline" className="glass-card border-0 shadow-soft">Diploma</Badge>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 animate-slide-in-left" style={{ animationDelay: "0.9s" }}>
                      Diploma in Computer Science & Engineering
                    </h3>
                    <p className="text-portfolio-accent font-semibold mb-3 animate-slide-in-left" style={{ animationDelay: "1s" }}>
                      Kurigram Polytechnic Institute
                    </p>
                    <div className="flex items-center text-muted-foreground animate-slide-in-left" style={{ animationDelay: "1.1s" }}>
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">2017 - 2022</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Skills */}
            <section className="section-reveal" style={{ animationDelay: "0.8s" }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 animate-heading-reveal">
                  <span className="animate-gradient-shift">Technical Skills</span>
                </h2>
                <p className="text-muted-foreground text-lg">Technologies and tools I work with</p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, skillList], categoryIndex) => (
                  <Card key={category} className="glass-card border-0 shadow-xl backdrop-blur-xl card-hover-glow project-grid-enter" style={{ animationDelay: `${0.9 + categoryIndex * 0.1}s` }}>
                    <CardContent className="p-8">
                      <h3 className="text-xl font-bold text-foreground mb-6 flex items-center animate-slide-in-left" style={{ animationDelay: `${1.0 + categoryIndex * 0.1}s` }}>
                        <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                        {category}
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {skillList.map((skill, skillIndex) => (
                          <div key={skill} className="group">
                            <Badge 
                              variant="secondary" 
                              className="w-full justify-center py-2 px-3 text-sm glass-card border-0 shadow-soft hover:shadow-medium hover:scale-105 transition-all duration-300 animate-stagger-fade" 
                              style={{ animationDelay: `${1.1 + categoryIndex * 0.1 + skillIndex * 0.05}s` }}
                            >
                              {skill}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Key Projects */}
            <section className="section-reveal" style={{ animationDelay: "1s" }}>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4 animate-heading-reveal">
                  <span className="animate-gradient-shift">Featured Projects</span>
                </h2>
                <p className="text-muted-foreground text-lg">A selection of my most impactful work</p>
              </div>
              
              <Card className="glass-card border-0 shadow-xl backdrop-blur-xl">
                <CardContent className="p-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                      <div key={index} className="group">
                        <div className="flex items-center justify-between p-6 rounded-2xl bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/50 hover:to-muted/20 transition-all duration-300 hover:scale-[1.02] project-grid-enter" style={{ animationDelay: `${1.1 + index * 0.1}s` }}>
                          <div className="flex items-center space-x-4">
                            <div className="w-3 h-3 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                            <span className="font-semibold text-foreground group-hover:text-primary transition-colors">{project.name}</span>
                          </div>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-125 hover:rotate-12"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-10 text-center">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
                    <p className="text-muted-foreground mb-6">Want to see more of my work?</p>
                    <Button variant="hero-outline" size="lg" asChild className="button-ripple hover:scale-105 transition-all duration-300">
                      <a href="/projects">
                        View All Projects
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="mt-10">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8"></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="flex items-center space-x-3 contact-card-enter">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Email</p>
                          <a href="mailto:badhonroy172@gmail.com" className="text-base text-foreground font-semibold hover:text-primary transition-colors break-all">
                            badhonroy172@gmail.com
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 contact-card-enter">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Phone</p>
                          <a href="tel:01783147171" className="text-base text-foreground font-semibold hover:text-primary transition-colors">
                            01783147171
                          </a>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3 contact-card-enter sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-xl">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-muted-foreground">Location</p>
                          <p className="text-base text-foreground font-semibold">Dhaka, Bangladesh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Bottom CTA */}
            <section className="section-reveal text-center" style={{ animationDelay: "1.2s" }}>
              <Card className="glass-card border-0 shadow-xl backdrop-blur-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-portfolio-accent/5"></div>
                <CardContent className="p-12 relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-4 animate-heading-reveal">
                    Let's Build Something Amazing Together
                  </h3>
                  <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                    I'm always excited to work on new projects and help businesses achieve their digital goals. 
                    Let's discuss how I can contribute to your success.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="hero" size="lg" asChild className="button-ripple hover:scale-105 transition-all duration-300">
                      <a href="/contact">
                        Get In Touch
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="hero-outline" size="lg" asChild className="button-ripple hover:scale-105 transition-all duration-300">
                      <a href="https://wa.me/8801783147171" target="_blank" rel="noopener noreferrer">
                        WhatsApp Chat
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Resume;