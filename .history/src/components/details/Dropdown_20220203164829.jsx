import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
  const currentDescription = [];
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  currentDescription.push(currentHousing.description);
  console.log(currentDescription);
  return 
      ({ type } === "description" ? <p>{type}</p> : null)

//     <select name={type}>
//       {type}
//       <option >
//         {currentHousing}.
//         {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
//       </option>
//     </select>
  
//     <select name={type}>
//     {type}
//       <option name={type}>
//         {currentHousing}.
//         {`${type}`.map((dropdownContent) => console.log(dropdownContent))}
//       </option>
//     </select>
//   );
}

export default Dropdown;
