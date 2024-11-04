import "./Counter.css";
import PropTypes from "prop-types";

function Counter({ numClicks, fade }) {
  return <div className={`counter ${fade? 'fadeclass' :''}`}>{numClicks}</div>;
}

export default Counter;

Counter.propTypes = {
  numClicks: PropTypes.number.isRequired,
  fade: PropTypes.bool.isRequired
};




