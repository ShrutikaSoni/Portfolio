import styles from '../styles/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
