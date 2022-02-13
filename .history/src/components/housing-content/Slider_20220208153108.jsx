import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Slider({ pictures }) {
    return (
  <figure className="slider">
      <img className="previous" src={arrow} alt="previous" />
      {pictures.map(picture=> (
      <img
        isActive={true}
        key={picture.slice(70, 118)}
        src={picture}
        alt={picture.slice(70, 118)}
      ></img>))}
      <img className="next" src={arrow} alt="next" />
  </figure>);
}

     

export default Slider;
