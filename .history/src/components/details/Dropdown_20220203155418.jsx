import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return (
  <select name={type} color="red">{type}
    <op
  </select>
  )
}

export default Dropdown;