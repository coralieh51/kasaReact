import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {
  return (
    <>
      {Array().map((thisRange)=>(
        <img key={thisRange} src={thisRange<=parseInt(range)?star:emptystar} alt={`${range} étoiles`} />
      ))}
    </>
  );
}

export default Ratings;