import React from "react";
import Housing from "./Logement";

function Tags(id) {
  return (
    <>
      {currentHousing.tags.map((tag) => (
        <span>{tag}</span>
      ))}
    </>
  );
}
export default Tags;
