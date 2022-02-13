import React from "react";
import arrow from "../../assets/img/arrow.svg";

function Slider({ pictures }) {
    return (
  <figure className="slider">
      <img onClick={handlePrevious(e)} className="previous" src={arrow} alt="previous" />
      {pictures.map(picture=> (
      <img
        isActive={true}
        key={picture.slice(100, picture.length)}
        src={picture}
        alt={picture.slice(100, picture.length)}
      ></img>))}
      <img className="next" src={arrow} alt="next" />
  </figure>);
}

const handlePrevious = (e)=> (
    if (!e.target.nextElementChild.getAttribute("key").slice(4,5) === "1") {
        e.target.nextElementChild.isActive === true;
        e.target.isActive === false;
    }
    return();
)

export default Slider;
