import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img key= src={picture} alt={"housing picture"}></img>
        ))
    )
}

export default Slider;