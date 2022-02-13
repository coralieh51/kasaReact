import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key={picture.slice(0,118)} src={picture} alt={"housing view"}></img>
            console.log()
        ))
    )
}

export default Slider;