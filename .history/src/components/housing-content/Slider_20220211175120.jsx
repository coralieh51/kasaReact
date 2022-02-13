import React, { useState } from "react";
import arrow from "../../assets/img/next.svg";

function Slider({ pictures }) {
  const [currentPicture, setPicture] = useState(1);
  function handlePrevious() {
    currentPicture !== 1
      ? setPicture(currentPicture - 1)
      : setPicture(pictures.length);
  }

  function handleNext() {
    currentPicture !== pictures.length
      ? setPicture(currentPicture + 1)
      : setPicture(1);
  }

  return (
    <figure className="slider">
      <img
        onClick={handlePrevious}
        className="previous"
        src={arrow}
        alt="previous"
      />
      {pictures.map((picture, index) => (
        <figure>
          <img
            className={currentPicture === index + 1 ? "isActive" : ""}
            key={picture.slice(100, picture.length)}
            src={picture}
            alt={picture.slice(100, picture.length)}
          />
          <figcaption>{</figcaption>
        </figure>
      ))}
      <img onClick={handleNext} className="next" src={arrow} alt="next" />
    </figure>
  );
}

export default Slider;