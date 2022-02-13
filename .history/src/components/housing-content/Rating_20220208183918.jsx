import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {
  return (
    <>
      <span>{range}*<img src={star} alt={`${range} étoiles`}/></span>
    </>
  );
}

export default Ratings;
