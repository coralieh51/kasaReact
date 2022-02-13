import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key={picture.slice(0,118)} src={picture} alt={"housing view"}></img>
            <h1>{picture.slice(0,118)}</h1>
        ))
    )
}

export default Slider;