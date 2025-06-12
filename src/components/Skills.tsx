
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

const skills = [
  { name: "React/Next.js", level: 95, color: "bg-blue-500" },
  { name: "TypeScript", level: 90, color: "bg-blue-400" },
  { name: "Node.js", level: 88, color: "bg-green-500" },
  { name: "Three.js/WebGL", level: 85, color: "bg-purple-500" },
  { name: "Python", level: 82, color: "bg-yellow-500" },
  { name: "Database Design", level: 87, color: "bg-red-500" },
  { name: "UI/UX Design", level: 80, color: "bg-pink-500" },
  { name: "DevOps/AWS", level: 75, color: "bg-orange-500" },
];

const technologies = [
  "React", "TypeScript", "Node.js", "Python", "Three.js", "WebGL",
  "MongoDB", "PostgreSQL", "AWS", "Docker", "GraphQL", "REST APIs",
  "Git", "Figma", "Tailwind CSS", "Next.js", "Express.js", "Socket.io"
];

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate skill bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedSkills(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold mb-6">Technical Proficiency</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div 
                  key={skill.name}
                  className="space-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {animatedSkills[skill.name] || 0}%
                    </span>
                  </div>
                  <Progress 
                    value={animatedSkills[skill.name] || 0} 
                    className="h-2 bg-muted"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
            <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className="glass-card p-4 rounded-lg text-center hover:scale-105 transition-transform duration-200 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))}
            </div>

            <div className="glass-card p-6 rounded-lg mt-8">
              <h4 className="text-lg font-bold mb-4 text-primary">What I Bring</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Full-stack development expertise</li>
                <li>• Modern UI/UX design principles</li>
                <li>• Performance optimization</li>
                <li>• Clean, maintainable code</li>
                <li>• Agile development practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
