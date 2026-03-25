import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BlurText from "./BlurText";
import ScrambledText from "./ScrambledText";
import RotatingText from './RotatingText';

const AnimatedSphere = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh scale={2.4}>
        <sphereGeometry args={[1, 100, 200]} />
        <meshStandardMaterial
          color="#d4d4d8"          // base
          emissive="#4b5563"       // subtle neon glow
          emissiveIntensity={0.45}
          roughness={0.7}          // slight reflections
          metalness={0.9}          // premium 3D look
        />
      </mesh>
    </Float>
  );
};
const CrystalIcosahedron = () => {
  return (
    <Float speed={1.6} rotationIntensity={1.2} floatIntensity={2}>
      <mesh scale={2.3}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#8b5cf6"             // Purple core
          emissive="#a78bfa"          // Bright glow
          emissiveIntensity={0.45}
          metalness={0.85}
          roughness={0.25}
        />
      </mesh>
    </Float>
  );
};
const GlassSphere = () => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={1.8}>
      <mesh scale={2.4}>
        <sphereGeometry args={[1, 100, 100]} />
        <meshPhysicalMaterial
          transmission={1}           // full glass
          thickness={0.5}
          roughness={0.1}
          metalness={0.05}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.45}                 // refractive index
          attenuationColor="#93c5fd"  // soft blue tint
          attenuationDistance={2}
        />
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
      className="min-h-screen mt-auto pt-20 flex items-center justify-center relative pt-0 max-xs:mt-10 "
    >
      <div className="max-w-full mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        {/* LEFT SIDE */}
        <div
          className={`space-y-8 z-10 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          <div className="space-y-4">
            <h1 className="text-xl lg:text-5xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
                Still <RotatingText
                        texts={['Thinking', 'Learning', 'Contributing','Exploring']}
                        mainClassName="flex px-2 md:px-3 bg-cyan-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-2xl"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                      />
              </span>
              <span className="block overflow-visible">
                <BlurText
                  text="Already Creating!"
                  delay={1}
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
                I’m an AIML and Full Stack Developer passionate about building intelligent systems and real-world applications. Currently working with LLMs, deep learning, and modern web technologies like Python, React, and Firebase.
              </ScrambledText>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground "
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
