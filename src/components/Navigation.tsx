
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import TrueFocus from './TrueFocus';

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navigationItems.map(item => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
  <nav
    className={`lg:fixed xl:fixed 2xl:fixed top-0 left-0 right-0 z-50 mx-auto transition-all duration-300 h-16 md:mb-10  ${
      isScrolled
        ? "glass-card backdrop-blur-lg border-b border-white/10"
        : "bg-transparent"
    }`}
  >
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Branding */}
        <a href="#home" className="text-lg sm:text-3xl font-semibold text-white w-fit flex items-center">
          <TrueFocus
            sentence="Typed & True"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </a>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={`text-sm font-medium transition-colors duration-200 hover:text-primary h-full ${
                activeSection === item.href.substring(1)
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <Button
          onClick={() => scrollToSection("#contact")}
          className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
        >
          Let's Talk
        </Button>
      </div>
    </div>
  </nav>
);

};
