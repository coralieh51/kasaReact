import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {
  const rangeArr = [1, 2, 3, 4, 5];
  const currentRange = rangeArr.filter((currRange) => currRange == range)[0];
  console.log(currentRange)
  return (<>{rangeArr.map((currRange) => (<img src={star} alt={`${range} étoiles`} />))}</>);
}

export default Ratings;
