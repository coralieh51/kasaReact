import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key={pictu} src={picture} alt={"housing view"}></img>
        ))
    )
}

export default Slider;