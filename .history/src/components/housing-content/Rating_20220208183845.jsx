import React from "react";
import star

function Ratings({ range }) {
  return (
    <>
      <span>{range}*<img src={star} alt={`${range} étoiles`}/></span>
    </>
  );
}

export default Ratings;
