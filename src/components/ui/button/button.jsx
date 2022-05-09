import styles from './button.module.scss';

const Button = ({ children, filtered, ...props }) => {
  return (
    <button {...props} type="button" className={`${styles.button}${filtered ? ' ' + styles.filtered : ''}`}>
      {children}
    </button>
  );
}

export default Button;