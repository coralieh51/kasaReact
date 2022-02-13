import React from "react";
import logements from "../../assets/data/logements.json";

const currentHousing = logements.data.filter(logement => logement.id === id)[0];

function Tags({id}) {
  return (
        <span>currentHousing.map(tag => {tag})</span>
  );
}

export default Tags;