import { useCallback, useId } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

type BackgroundParticlesProps = {
  className?: string;
};

export function BackgroundParticles({ className = "" }: BackgroundParticlesProps) {
  const particlesId = useId();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={`absolute inset-0 z-0 ${className}`}>
      <Particles
        id={`museoverse-particles-${particlesId}`}
        init={particlesInit}
        className="h-full w-full"
        options={{
          background: { color: { value: "rgba(255, 255, 255, 0)" } },
          fpsLimit: 120,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#341701" },
            links: {
              color: "#341701",
              distance: 150,
              enable: true,
              opacity: 0.8,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 900 }, value: 30 },
            opacity: { value: 0.9 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
