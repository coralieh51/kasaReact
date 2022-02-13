import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {

  const rangeArr = 
  return (
    <>
      {<img src={star} alt={`${range} étoiles`} />*{parseInt(range)}}
      {<img src={emptystar} alt={`${range} étoiles`} />*(5-parseInt(range))}
    </>
  );
}

export default Ratings;
