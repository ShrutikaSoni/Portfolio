import styles from '../styles/Projects.module.css';

function Projects() {
  const projects = [
    { name: 'Portfolio Website', desc: 'Personal site built with React + Vite.' },
    { name: 'E-commerce App', desc: 'Full-stack app with Stripe integration.' }
  ];

  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <h3>{project.name}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
