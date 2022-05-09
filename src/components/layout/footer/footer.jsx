import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.copyright}> © 2022</span>
    </footer>
  );
}

export default Footer;
