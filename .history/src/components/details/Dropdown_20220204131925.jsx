import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  const currentDescription = []
  currentDescription.push(currentHousing.description)
  const currentType = type === "description" ? "description" : "equipments";

  return (
<ul>
  <li></li>
</ul>
  );
}

export default Dropdown;
