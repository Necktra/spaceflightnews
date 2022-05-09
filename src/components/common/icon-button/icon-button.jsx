import styles from './icon-button.module.scss';

const IconButton = ({ children, type, callback }) => {
  let additionalStyle = '';

  if (type === 'delete') {
    additionalStyle = styles.deleteButton;
  } else if (type === 'like') {
    additionalStyle = styles.likeButton;
  }

  return (
    <button type="button" onClick={callback} className={`${styles.iconButton} ${additionalStyle}`}>
      {children}
    </button>
  );
}

export default IconButton;