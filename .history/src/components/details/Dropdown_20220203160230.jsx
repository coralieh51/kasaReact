import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
    currentDescription = []
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return (
    <select name={type} color="red">
      {type};
      <option>
        {currentHousing}.{`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  );
}

export default Dropdown;
