import './button.scss';

const Button = ({ children, filtered, ...props }) => {
  return (
    <button {...props} type="button" className={`button${filtered ? ' button_filtered' : ''}`}>
      {children}
    </button>
  );
}

export default Button;