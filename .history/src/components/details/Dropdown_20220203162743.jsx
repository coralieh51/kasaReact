import React from "react";
import logements from "../../assets/data/logements.json";

const currentDescription = [];
const currentHousing = logements.data.filter(
    (logement) => logement.id === id
    )[0];
    function Dropdown({ currentHousing }) {
    return (
//   currentDescription.push(currentHousing.description);
//   return 
      console.log({currentHousing})

    )
}

export default Dropdown;
