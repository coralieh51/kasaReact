import React from "react";

const currentHousing = logements.data.filter(logement => logement.id === id)[0];

function Tags({id}) {
  return (
        <span>currentHousing.map(tag => {tag})</span>
  );
}

export default Tags;