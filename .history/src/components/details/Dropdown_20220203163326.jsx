import React from "react";


function Dropdown({ currentHousing, id, type }) {
    const currentDescription = [];
    currentDescription.push(currentHousing.description);
    console.log({currentDescription})
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
