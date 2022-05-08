import './icon-button.scss';

const IconButton = ({ children, type, callback }) => {

  let style = '';
  if (type === 'delete') {
    style = ' icon-button_delete';
  } else if (type === 'like') {
    style = ' icon-button_like';
  }

  return (
    <button type="button" onClick={callback} className={`icon-button${style}`}>
      {children}
    </button>
  );
}

export default IconButton;