import { useEffect } from "react";
import { Header } from "@/components/Header";
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

const Index = () => {
  useEffect(() => {
    try {
      // Set initial theme
      const savedTheme = localStorage.getItem("theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
      
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add(initialTheme);
    } catch (error) {
      console.warn("Failed to set initial theme:", error);
      // Fallback to light theme
      document.documentElement.classList.remove("light", "dark");
      document.documentElement.classList.add("light");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <Skills />
        <Projects />
        <Education />
        <About />
        <ContactPreview />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
