import React from "react";

function Ratings({ range }) {
  return (
    <>
      <span>{range}*<img src={star} alt=/></span>
    </>
  );
}

export default Ratings;
