import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key={picture.splic} src={picture} alt={"housing view"}></img>
        ))
    )
}

export default Slider;