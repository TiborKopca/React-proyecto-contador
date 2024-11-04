import PropTypes from "prop-types";
import "./Button.css"; // Import the CSS file


function Button({ text , isButtonClick, handleClick}) {
  return (
    <button 
    className={ isButtonClick ? "button button-click" : "button button-reiniciate" } 
    onClick={ handleClick}
    >
      {text}
    </button>
  )
}

export default Button

// Define prop types for Button component
Button.propTypes = {
  text: PropTypes.string.isRequired,
  isButtonClick: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};