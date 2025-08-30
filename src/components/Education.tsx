import { GraduationCap, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "World University of Bangladesh",
    period: "2020 - 2024",
    status: "Completed"
  },
  {
    degree: "Diploma in Computer Science & Engineering", 
    institution: "Kurigram Polytechnic Institute",
    period: "2017 - 2020",
    status: "Completed"
  }
];

export function Education() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 section-reveal">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-heading-reveal animate-hover-glow">
            <span className="animate-gradient-shift">Education</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal" style={{ animationDelay: "0.3s" }}>
            My academic journey in computer science and engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-primary via-portfolio-accent to-primary opacity-30"></div>
            
            <div className="space-y-16">
              {education.map((item, index) => (
                <div key={item.degree} className="relative flex items-start group animate-stagger-fade" style={{ animationDelay: `${index * 300 + 600}ms` }}>
                  {/* Timeline dot */}
                  <div className="absolute left-6 mt-3 h-4 w-4 rounded-full hero-gradient border-4 border-background shadow-large group-hover:scale-125 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="ml-20 w-full">
                    <Card className="shadow-soft hover-lift glass-card border-0 backdrop-blur-xl">
                      <CardContent className="p-8">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center text-muted-foreground text-sm glass-card border-0 px-3 py-1 rounded-full shadow-soft">
                            <Calendar className="h-4 w-4 mr-2" />
                            {item.period}
                          </div>
                          <div className="flex items-center text-primary">
                            <GraduationCap className="h-6 w-6" />
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors animate-slide-in-left" style={{ animationDelay: `${index * 300 + 800}ms` }}>
                          {item.degree}
                        </h3>
                        
                        <p className="text-muted-foreground font-medium text-lg mb-4">
                          {item.institution}
                        </p>
                        
                        <div className="mt-4">
                          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium hero-gradient text-white shadow-medium">
                            {item.status}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}