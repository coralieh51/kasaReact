import React from "react";

function Slider({ pictures }) {
  return pictures.map((picture) => (
    <figure>
      <img
        key={picture.slice(0, 118)}
        src={picture}
        alt={"housing view"}
      ></img>
    </figure>
  ));
}

export default Slider;