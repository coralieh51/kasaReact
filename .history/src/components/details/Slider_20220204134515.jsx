import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key={picture.slice(0,145)} src={picture} alt={"housing view"}></img>
        ))
    )
}

export default Slider;