import styles from './button.module.scss';

const Button = ({ children, showOnlyLikedNews, ...props }) => {
  return (
    <button {...props} type="button" className={`${styles.button}${showOnlyLikedNews ? ' ' + styles.filtered : ''}`}>
      {children}
    </button>
  );
}

export default Button;