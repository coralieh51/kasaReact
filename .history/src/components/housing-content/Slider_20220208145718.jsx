import React from "react";

function Slider({ pictures }) {
  return pictures.map((picture) => (
      <img src=
    <figure className="slider">
      <img
        key={picture.slice(0, 118)}
        src={picture}
        alt={"housing view"}
      ></img>
    </figure>
  ));
}

export default Slider;