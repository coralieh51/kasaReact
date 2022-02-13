import React from "react";

function Slider({ pictures }) {
  return pictures.map((picture) => (
      <>
      <img className="previous" src={}/>
    <figure className="slider">
      <img
        isActive={true}
        key={picture.slice(0, 118)}
        src={picture}
        alt={"housing view"}
      ></img>
    </figure>
    <img className="next" src={}/>
    </>
  ));
}

export default Slider;
