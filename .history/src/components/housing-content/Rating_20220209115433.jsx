import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {
  const rangeArr = [1, 2, 3, 4, 5];
  return (
    <>
      {rangeArr.map((thisRange)=>(
        <img key={thisRange} src={thisRange<=parseInt(range)?star:emptystar} alt={`${range} étoiles`} />
      ))}
    </>
  );
}

export default Ratings;