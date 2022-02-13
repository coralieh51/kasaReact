import React from "react";
import star from "../../assets/img/star.svg";
import emptystar from "../../assets/img/emptystar.svg";

function Ratings({ range }) {
  const rangeArr = [1, 2, 3, 4, 5];
  const currentRange = rangeArr.filter((currRange) => currRange <= range);
  const empty = rangeArr.filter((currRange) => currRange > range);
  return (
    <>
      {rangeArr.map()=>}
    </>
  );
}

export default Ratings;

/* {currentRange.map(
        currentRange => (<img src={star} alt={`${range} étoiles`} />)
        )}
        {empty.map(
        empty => (<img src={emptystar} alt={`${5-range} étoiles`} />)
        )} */