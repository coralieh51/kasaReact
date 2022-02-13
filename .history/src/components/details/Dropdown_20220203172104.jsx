import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  const currentType = type === "description" ? "description" : "equipments";

  return (
    <select key={`${currentType}-${id}`} name={currentType}>
      {currentType}
      {currentType.map((dropdownContent, index) => (
        <option key={`${index}-${id}`} value={dropdownContent}></option>
      ))}
    </select>
  );
}

export default Dropdown;
