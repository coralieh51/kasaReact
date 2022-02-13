import React from "react";

function Ratings({ range }) {
  return (
    <>
      <span>{range}*<img src={star} alt={`${range}`}/></span>
    </>
  );
}

export default Ratings;
