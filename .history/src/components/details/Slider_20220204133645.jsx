import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <img src={picture} alt={"housing picture"}></img>
        ))
    )
}