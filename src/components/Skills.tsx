import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Frameworks",
    skills: ["CodeIgniter", "React", "Laravel", "Express.js"]
  },
  {
    category: "Languages",
    skills: ["PHP", "JavaScript", "TypeScript", "SQL"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "REST APIs", "MySQL", "MongoDB", "Docker", "Linux"]
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "jQuery"]
  }
];

export function Skills() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-20 section-reveal">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl animate-heading-reveal animate-hover-glow">
            <span className="animate-gradient-shift">Technical Skills</span>
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto animate-slide-up font-light section-reveal" style={{ animationDelay: "0.3s" }}>
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="text-center animate-stagger-fade"
              style={{ animationDelay: `${categoryIndex * 200 + 500}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 animate-slide-in-left" style={{ animationDelay: `${categoryIndex * 200 + 600}ms` }}>
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="text-sm px-4 py-2 rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 cursor-default shadow-soft hover:shadow-medium hover:scale-105"
                    style={{ animationDelay: `${(categoryIndex * 200) + (skillIndex * 75)}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}