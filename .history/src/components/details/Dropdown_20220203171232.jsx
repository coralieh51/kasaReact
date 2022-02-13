import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentDescription = [];
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  const currentType = type === "description" ? "description" : "equipments";
  currentDescription.push(currentHousing.description);
  
  return(
 
    <select name={currentType}>
      {currentType}
      {{currentType}.map(dropdownContent => (
      <option key={`${currentType}-${id}`}  
      value={dropdownContent}>
      </option>)})
    </select>
  );
}

export default Dropdown;
