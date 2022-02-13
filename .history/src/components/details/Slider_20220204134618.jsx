import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            console.log({picture}.slice(0,118))
            <img key={picture.slice(0,118)} src={picture} alt={"housing view"}></img>
        ))
    )
}

export default Slider;