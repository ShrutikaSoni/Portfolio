import { motion } from 'framer-motion';
import { Typewriter, useTypewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import styles from '../styles/Hero.module.css';

function Hero() {
  const { ref, inView } = useInView({ triggerOnce: false });
  const [text] = useTypewriter({
    words: ['Full Stack Developer', 'React Expert', 'Open Source Contributor'],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });

  return (
    <motion.section
      id="hero"
      className={styles.hero}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      ref={ref}
    >
      <div className={styles.glow}></div>
      <h1>Hi, I’m Your Name</h1>
      <h2>{inView ? text : ''}<span className={styles.cursor}>|</span></h2>
      <a href="#projects" className={styles.cta}>
        Check out my work
      </a>
    </motion.section>
  );
}

export default Hero;
