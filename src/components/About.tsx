import { Canvas } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useEffect, useState } from "react";
import ModelViewer from "./ModelViewer";

const FloatingBox = ({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("about");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT TEXT */}
          <div
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 rounded-full"></div>
            </div>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                I am an Electronics engineering student with a strong interest in Artificial Intelligence, Machine Learning, and Full Stack Development. I am currently exploring concepts like LLMs, Transformers, CNNs, and RNNs through hands-on projects.

I aim to build intelligent systems, including custom AI models for stock analysis and smart assistants that solve real-world problems. Alongside this, I develop full stack applications using Python, React, Firebase, and Git.

With certifications in Full Stack Development and Python, along with virtual internships, I am focused on creating clean, efficient, and impactful technology.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">20+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="text-3xl font-bold text-primary">3+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT 3D MODEL */}
          <div
            className={`flex justify-center transition-all duration-700 ${
              isVisible ? "animate-scale-in" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-[300px] h-[600px]">
              <ModelViewer
                url="/low_poly_mccree.glb"
                width={400}
                height={700}
                autoFrame={true}
                defaultRotationY={10}
                defaultZoom={2}
                fadeIn={true}
                modelYOffset={1.5}
                autoRotate={true}
                environmentPreset="studio"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
