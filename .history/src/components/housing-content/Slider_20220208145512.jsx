import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <figure></figure>
            <img className="slider" key={picture.slice(0,118)} src={picture} alt={"housing view"}></img>
        ))
    )
}

export default Slider;