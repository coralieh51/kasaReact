import React from "react";

function Ratings({ range }) {
  return (
    <>
      <span>{range}*<img src={star} alt={`${range}-étoiles`}/></span>
    </>
  );
}

export default Ratings;
