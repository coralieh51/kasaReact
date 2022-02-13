import React from "react";
import logements from "../../assets/data/logements.json";


function Dropdown({ currentHousing, id, type }) {
    const currentDescription = [];
    currentDescription.push({curren})
return (
    <select key={({type} === "description")?`desc-${id}` : `equip-${id}` } name={type}>
      {type}
      {currentHousing}.
      {`${type}`.map((dropdownContent) => (
        <option key={dropdownContent} value={dropdownContent}>
          {dropdownContent}
        </option>
      ))}
    // </select>

    )
}

export default Dropdown;
