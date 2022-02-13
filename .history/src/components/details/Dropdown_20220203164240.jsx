import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ currentHousing, id, type }) {
  const currentDescription = [];
  currentDescription.push(currentHousing.description);
  console.log(currentDescription);
  return { type } === "description" ? (
    <select name={type}>
      {type}
      <option >
        {currentHousing}.
        {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  ) : (
    <select name={type}>
    {type}
      <option name={type}>
        {currentHousing}.
        {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  );
}

export default Dropdown;
