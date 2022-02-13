import React from "react";
import logements from "../../assets/data/logements.json";

function Tags({ id }) {
  return currentHousing.tags.map((tag) => <span key={tag}>{tag}</span>);
}

export default Tags;