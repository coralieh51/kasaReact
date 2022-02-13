import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Slider({ pictures }) {
    return (
  <figure className="slider">
     {pictures}.map(picture => (
      <img className="previous" src={arrow} alt="previous" />
      <img
        isActive={true}
        key={picture.slice(110, 118)}
        src={picture}
        alt={"housing view"}
      ></img>
      <img className="next" src={arrow} alt="next" />
    )
  </figure>);
}

     

export default Slider;
