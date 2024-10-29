// import React from 'react'
import PropTypes from "prop-types";
import "../css/Testimonio.css";

function Testimonio({
  imagen,
  imgAlt,
  pais,
  nombre,
  cargo,
  empresa,
  testimonio,
}) {
  return (
    <div className="container__testimonio">
      <img
        className="img__testimonio"
        src={`../../src/img/testimony-${imagen}.png`}
        alt={`${nombre}${imgAlt}`}
		loading="lazy"
      />
      <div className="container__testimonio-text">
        <p className="testimonio__name">
          <strong>{nombre}</strong> in {pais}
        </p>
        <p className="testimonio__job">
          {cargo} at <b>{empresa}</b>
        </p>
        <p className="testimonio__text">
          {testimonio.testimonioStart}
          <strong>{testimonio.testimonioMiddle}</strong>
          {testimonio.testimonioEnd}
        </p>
      </div>
    </div>
  );
}

// Define prop types for Testimonio component
Testimonio.propTypes = {
  imagen: PropTypes.string.isRequired,
  imgAlt: PropTypes.string,
  pais: PropTypes.string.isRequired,
  nombre: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  empresa: PropTypes.string.isRequired,
  testimonio: PropTypes.shape({
    testimonioStart: PropTypes.string,
    testimonioMiddle: PropTypes.string,
    testimonioEnd: PropTypes.string,
  }).isRequired,
};

export default Testimonio;
