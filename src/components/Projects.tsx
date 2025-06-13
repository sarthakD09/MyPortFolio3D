
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const projects = [
  {
    title: "Witty-Chat-App",
    description: "WittyChat is a real-time chat application built with React, Vite, and Firebase, offering secure messaging, image sharing, and instant updates.",
    image: "/witty_chat.png",
    technologies: ["React", "Node.js", "firebase","Zustand"],
    demoUrl: "https://novion-schat.web.app/",
    codeUrl: "https://github.com/sarthakD09/WittyChat.git",
  },
  {
    title: "3D Portfolio Website",
    description: "Interactive portfolio featuring Three.js animations and immersive 3D experiences.",
    image: "/3d_portfolio.png",
    technologies: ["Vite", "React", "Three.js", "TypeScript", "GSAP", "tailwindcss"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Self balancing robot",
    description: "A self-balancing robot is a two-wheeled, motorized robotic system designed to maintain its upright position autonomously using real-time feedback and control algorithms. This project was an application of embedded systems, control theory, and sensor integration.",
    image: "/self_balancing_robot.jpeg",
    technologies: ["PID_Control", "Arduino_Uno", "Motor_Driver (L298N)", "MPU6050 (Gyroscope & Accelerometer)", "DC_Motor_with_Encoder"],
    demoUrl: "https://youtu.be/pbJbpHjC3v0?si=WAY5c4774hRo4UHU",
    codeUrl: "https://github.com/sarthakD09/Self_Balancing_Robot-Complete-Project-.git",
  },
  {
    title: "Simon Memory Game",
    description: "A web-based memory game inspired by the classic Simon Game, where the player must remember and repeat a growing sequence of color flashes and sounds. Each round adds one new color to the sequence, increasing difficulty and testing the player's memory.",
    image: "/simon_game.png",
    technologies: ["html", "css", "javascript"],
    demoUrl: "https://sarthakd09.github.io/Simon_GAME/",
    codeUrl: "https://github.com/sarthakD09/Simon_GAME.git",
  },
  {
    title: "Tarot_Readings",
    description: "A creative and interactive web-based Tarot card reading tool designed to simulate traditional card draws and provide symbolic interpretations for users. This project blends web development with basic storytelling and randomization logic.",
    image: "/tarot.png",
    technologies: ["html", "css", "javascript"],
    demoUrl: "https://sarthakd09.github.io/TaroT/",
    codeUrl: "https://github.com/sarthakD09/TaroT.git",
  },
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects");
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, featuring innovative solutions and cutting-edge technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass-card hover:scale-105 transition-all duration-300 group overflow-hidden ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      className="bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                      disabled={project.demoUrl === "#"}
                    >
                      Live Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary/50 text-primary hover:bg-primary/10"
                      onClick={() => window.open(project.codeUrl, "_blank")}
                      disabled={project.codeUrl === "#"}
                    >
                      View Code
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
