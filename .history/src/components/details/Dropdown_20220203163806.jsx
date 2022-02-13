import React from "react";

function Dropdown({ currentHousing, id }) {
    const currentDescription = [];
    currentDescription.push(currentHousing.description);
    return 
        <p>{currentHousing.id}</p>
        // <select key={({type} === "description")?`desc-${id}` : `equip-${id}` } name={type}>
    //   {type}
    //   {currentHousing}.
    //   {`${type}`.map((dropdownContent) => (
    //     <option key={dropdownContent} value={dropdownContent}>
    //       {dropdownContent}
    //     </option>
    //   ))}
    // </select>

}

export default Dropdown;
