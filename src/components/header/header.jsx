import styles from './header.module.scss';
import Logo from '../common/icons/logo/logo';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/spaceflightnews">
        <Logo />
      </a>
    </header>
  );
}

export default Header;
