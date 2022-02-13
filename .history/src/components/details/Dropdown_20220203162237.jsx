import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentDescription = [];
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  currentDescription.push(currentHousing.description);
  return (
    <select key={({type} === "description")?`desc-${id}` : `desc-${id}` } name={type}>
      {type}
      {currentHousing}.
      {`${type}`.map((dropdownContent) => (
        <option key={dropdownContent} value={dropdownContent}>
          {dropdownContent}
        </option>
      ))}
    </select>
  );
}

export default Dropdown;
