import React from "react";

function Dropdown({ currentHousing, id, type }) {
    const currentDescription = [];
    currentDescription.push(currentHousing.description);
    return (
        // <select key={({type} === "description")?`desc-${id}` : `equip-${id}` } name={type}>
        console.log({currentHousing})
    //   {type}
    //   {currentHousing}.
    //   {`${type}`.map((dropdownContent) => (
    //     <option key={dropdownContent} value={dropdownContent}>
    //       {dropdownContent}
    //     </option>
    //   ))}
    // </select>

    )
}

export default Dropdown;
