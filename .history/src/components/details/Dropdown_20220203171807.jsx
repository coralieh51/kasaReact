import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  const currentType = type === "description" ? "description" : "equipments";
  const 

  return (
    <select key={`${currentType}-${id}`} name={currentType}>
      {currentType}
      {currentType.map(dropdownContent => (
        <option key={`${currentHousing}-index-${id}`} value={dropdownContent}></option>
      ))}
    </select>
  );
}

export default Dropdown;
