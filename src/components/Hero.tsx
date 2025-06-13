import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BlurText from "./BlurText";
import ScrambledText from "./ScrambledText";

const AnimatedSphere = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.4}>
        <sphereGeometry args={[1, 100, 200]} />
        <meshStandardMaterial color="#3b82f6" roughness={0} />
      </mesh>
    </Float>
  );
};

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen mt-auto flex items-center justify-center relative pt-0"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* LEFT SIDE */}
        <div
          className={`space-y-8 z-10 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Still Learning,
              </span>
              <span className="block overflow-visible mt-2">
                <BlurText
                  text="Already Creating!"
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-4xl mb-4"
                />
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-lg">
              Hi,{" "}
              <span className="bg-gradient-to-r font-bold leading-tight from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                I'm Sarthak
              </span>
              <br />
              <ScrambledText
                className="text-base sm:text-lg md:text-xl w-full ml-0 whitespace-pre-line"
                radius={40}
                duration={1}
                speed={0.5}
                scrambleChars=".:"
              >
                A developer passionate about building web apps that make a
                difference. <br />
                I specialize in crafting beautiful, <br /> performant digital
                experiences using 3D <br />visualization, clean UI/UX, and <br />
                cutting-edge tech.
              </ScrambledText>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground neon-glow"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary"
            >
              Download CV
            </Button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className={`h-96 lg:h-[500px] w-full lg:w-[500px] ${
            isVisible ? "animate-fade-in" : "opacity-0"
          } relative`}
        >
          <div className="absolute inset-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />
              <AnimatedSphere />
              <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
