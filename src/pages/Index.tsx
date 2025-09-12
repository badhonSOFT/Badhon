import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { About } from "@/components/About";
import { ContactPreview } from "@/components/ContactPreview";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    try {
      // Set initial theme - default to light
      const savedTheme = localStorage.getItem("theme");
      const initialTheme = savedTheme || "light";
      
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(initialTheme);
    } catch (error) {
      console.warn("Failed to set initial theme:", error);
      // Fallback to light theme
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("light");
    }

    // GSAP Scroll Animations
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(section, 
          { 
            opacity: 0, 
            y: 50 
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <main>
        <Hero />
        <section ref={el => sectionsRef.current[0] = el}>
          <Services />
        </section>
        <section ref={el => sectionsRef.current[1] = el}>
          <Skills />
        </section>
        <section ref={el => sectionsRef.current[2] = el}>
          <Projects />
        </section>
        <section ref={el => sectionsRef.current[3] = el}>
          <Education />
        </section>
        <section ref={el => sectionsRef.current[4] = el}>
          <About />
        </section>
        <section ref={el => sectionsRef.current[5] = el}>
          <ContactPreview />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
