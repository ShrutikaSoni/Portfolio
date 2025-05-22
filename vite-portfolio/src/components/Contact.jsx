import styles from '../styles/Contact.module.css';

function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact</h2>
      <p>Reach me at <a href="mailto:yourname@example.com">yourname@example.com</a></p>
      <p><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </section>
  );
}

export default Contact;
