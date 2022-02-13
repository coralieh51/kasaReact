import React from "react";

function Slider( { pictures } ) {
    return (
        pictures.map(picture => (
            <>
            <img key={picture.slice(0,118)} src={picture} alt={"housing view"}></img>
            <h1>{picture.slice(102,n-1)}</h1>
            </>
        ))
    )
}

export default Slider;