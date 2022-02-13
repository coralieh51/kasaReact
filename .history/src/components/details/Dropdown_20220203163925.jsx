import React from "react";

function Dropdown({ currentHousing, id }) {
    const currentDescription = [];
    currentDescription.push(currentHousing.description);
    return (<p>{currentHousing.description}</p>)

}

export default Dropdown;
