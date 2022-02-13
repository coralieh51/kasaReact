import React from "react";
import arrow from "../../assets/img/arrow.svg";
import {useSt}

function Slider({ pictures }) {
    
  function handlePrevious(e) {

  }

  return (
    <figure className="slider">
      <img
        onClick={handlePrevious}
        className="previous"
        src={arrow}
        alt="previous"
      />
      {pictures.map((picture) => (
        <img
          key={picture.slice(100, picture.length)}
          src={picture}
          alt={picture.slice(100, picture.length)}
        />
      ))}
      <img className="next" src={arrow} alt="next" />
    </figure>
  );
}

export default Slider;