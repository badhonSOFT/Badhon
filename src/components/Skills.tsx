import { Badge } from "@/components/ui/badge";
import { HighlightGroup, HighlighterItem, Particles } from "@/components/ui/highlighter";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["PHP", "JavaScript", "SQL"]
  },
  {
    category: "Frameworks & Libraries",
    skills: ["CodeIgniter", "React"]
  },
  {
    category: "Frontend Technologies",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
  },
  {
    category: "Backend & Database",
    skills: ["MySQL", "Supabase", "REST APIs", "Ajax"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Docker", "Linux", "cPanel"]
  }
];

export function Skills() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 section-reveal">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground animate-heading-reveal animate-hover-glow">
            <span className="animate-gradient-shift">Technical Skills</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal px-4 sm:px-0" style={{ animationDelay: "0.3s" }}>
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        <HighlightGroup className="group">
          <HighlighterItem className="rounded-3xl p-6">
            <div className="relative z-20 overflow-hidden rounded-3xl bg-white dark:bg-black p-8">
              <Particles
                className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-100"
                quantity={100}
                color={"#60a5fa"}
                vy={-0.1}
              />
              
              <div className="space-y-12">
                {/* First row - 3 categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                  {skillCategories.slice(0, 3).map((category, categoryIndex) => (
                    <div 
                      key={category.category}
                      className="text-center animate-stagger-fade"
                      style={{ animationDelay: `${categoryIndex * 200 + 500}ms` }}
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 animate-slide-in-left" style={{ animationDelay: `${categoryIndex * 200 + 600}ms` }}>
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-soft hover:shadow-medium hover:scale-105"
                            style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 75)}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Second row - 2 categories */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-4xl mx-auto">
                  {skillCategories.slice(3, 5).map((category, categoryIndex) => (
                    <div 
                      key={category.category}
                      className="text-center animate-stagger-fade"
                      style={{ animationDelay: `${(categoryIndex + 3) * 200 + 500}ms` }}
                    >
                      <h3 className="text-base sm:text-lg font-semibold text-foreground mb-4 sm:mb-6 animate-slide-in-left" style={{ animationDelay: `${(categoryIndex + 3) * 200 + 600}ms` }}>
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skill}
                            variant="outline"
                            className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-soft hover:shadow-medium hover:scale-105"
                            style={{ animationDelay: `${((categoryIndex + 3) * 200) + (skillIndex * 75)}ms` }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </HighlighterItem>
        </HighlightGroup>
      </div>
    </section>
  );
}