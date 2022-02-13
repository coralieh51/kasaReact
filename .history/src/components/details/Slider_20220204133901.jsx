import React from "react";

function Slider( { pictures, index } ) {
    return (
        pictures.map(picture => (
            <img key={index} src={picture} alt={"housing picture"}></img>
        ))
    )
}

export default Slider;