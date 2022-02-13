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
      {type}
      <option >
        {currentHousing}.
        {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  
    <select name={currentType}>
    {type}
      <option name={tcurrenype}>
        {currentHousing}.
        {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  );
}

export default Dropdown;