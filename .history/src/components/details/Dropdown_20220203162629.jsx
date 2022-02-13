import React from "react";
import logements from "../../assets/data/logements.json";

return (
const currentDescription = [];
const currentHousing = logements.data.filter(
(logement) => logement.id === id
)[0];
function Dropdown({ currentHousing, id, type }) {
//   currentDescription.push(currentHousing.description);
//   return 
      console.log({currentHousing})
    // <select key={({type} === "description")?`desc-${id}` : `equip-${id}` } name={type}>
      {/* {type} */}
      {/* {currentHousing}.
      {`${type}`.map((dropdownContent) => (
        <option key={dropdownContent} value={dropdownContent}>
          {dropdownContent}
        </option>
      ))} */}
    // </select>
    )
}

export default Dropdown;
