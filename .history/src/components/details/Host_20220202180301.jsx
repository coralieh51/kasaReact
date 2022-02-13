import React from "react";
import logements from "../../assets/data/logements.json";

function HostIn({ id }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return currentHousing.tags.map((tag) => <span>{tag}</span>);
}

export default Tags;