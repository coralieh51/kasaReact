import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentDescription = [];
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  currentDescription.push(currentHousing.description);
  return { type } === "description" ? (
    <select key={`desc.${id}`} name={type}>
      {type}
      <option name={type}>
        {currentHousing}.
        {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  ) : (
    <select key={`equip.${id}`} name={type}>
    {type}
        {currentHousing}.
        {`${type}`.map((dropdownContent) => <option key =  value={dropdownContent}>{dropdownContent}</option>)}
    </select>
  );
}

export default Dropdown;
