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
      
      <option key={`${currentType}-${id}`} {`${currentType}`.map((dropdownContent) => value=dropdownContent)} >
        {currentHousing}.
      </option>
    </select>
  );
}

export default Dropdown;
