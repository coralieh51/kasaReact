import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Slider({ pictures }) {
  return pictures.map((picture) => (
      <>
      <img className="previous" src={arrow}/>
    <figure className="slider">
      <img
        isActive={true}
        key={picture.slice(0, 118)}
        src={picture}
        alt={"housing view"}
      ></img>
    </figure>
    <img className="next" src={arrow} alt="next"/>
    </>
  ));
}

export default Slider;
