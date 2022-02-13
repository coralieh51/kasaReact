import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <>
            <img key={picture.slice(0,118)} src={picture} alt={"housing view"}></img>
            <h1>{picture.slice(picture.length-7,picture.length)}</h1>
            </>
        ))
    )
}

export default Slider;