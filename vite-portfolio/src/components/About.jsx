import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import styles from '../styles/About.module.css';

const About = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{  
         fullScreen: { enable: true, zIndex: -1 }, 
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: { enable: true, mode: "grab" },
              onClick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.5 } },
              push: { quantity: 4 }
            }
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.4 },
            size: { value: { min: 1, max: 3 }, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: 2,
              outModes: { default: "bounce" }
            }
          },
          detectRetina: true
        }}
      />

      {/* CONTENT ON TOP */}
      <section id="about" className={styles.content}>
        <h2>About Me</h2>
        <p>
          I’m a full-stack developer passionate about building excellent software
          that improves the lives of those around me.
        </p>
      </section>
    </div>
  );
};

export default About;
