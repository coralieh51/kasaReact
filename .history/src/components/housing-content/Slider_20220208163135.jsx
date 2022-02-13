import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Slider({ pictures }) {

  function handlePrevious(e) {
    if (!e.target.nextElementChild.getAttribute("key").slice(4, 5) === "1") {
 
    console.log(e);
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
          isActive={true}
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
