import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {
  return (
    <>
      {Array(5).fill().map((_,index)=>(
        <img key={index} src={index+1<=parseInt(range)?star:emptystar} alt={`${range} étoiles`} />
      ))}
    </>
  );
}

export default Ratings;