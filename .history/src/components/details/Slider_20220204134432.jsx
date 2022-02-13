import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key={picture.slice(0,10)} src={picture} alt={"housing view"}></img>
        ))
    )
}

export default Slider;