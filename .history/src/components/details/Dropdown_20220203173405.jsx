import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  const currentDescription = []
  currentDescription.push
  const currentType = type === "description" ? "description" : "equipments";

  return (
    <select name={currentType}>
      {currentType}
      {currentHousing.currentType.map((dropdownContent, index) => (
        <option key={`${index}-${id}`} value={dropdownContent}>{dropdownContent}</option>
      ))}
    </select>
  );
}

export default Dropdown;
