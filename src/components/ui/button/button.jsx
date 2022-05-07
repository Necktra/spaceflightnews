import './button.scss';

const Button = ({ children, ...props }) => {
    return (
        <button {...props} type="button" className="button">
          {children}
        </button>
      );
}

export default Button;