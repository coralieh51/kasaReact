import React from "react";

function Ratings({ range }) {
  return (
    <>
      <span>{range}*<img src={star}</span>
    </>
  );
}

export default Ratings;
