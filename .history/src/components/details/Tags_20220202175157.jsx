import React from "react";
import logements from "../../assets/data/logements.json";


function Tags({id}) {
    const currentHousing = logements.data.filter(logement => logement.id === id)[0];
  return (
      currentHousing.map(tag => {tag}
        <span>)</span>
  )
}

export default Tags;