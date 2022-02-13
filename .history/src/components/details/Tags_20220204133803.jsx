import React from "react";

function Tags({ tags }) {
  return currentHousing.tags.map((tag) => <span key={tag}>{tag}</span>);
}

export default Tags;