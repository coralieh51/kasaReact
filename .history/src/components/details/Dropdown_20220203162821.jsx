import React from "react";
import logements from "../../assets/data/logements.json";


function Dropdown({ currentHousing }) {
    const currentDescription = [];
    const currentHousing = logements.data.filter(
        (logement) => logement.id === id
        )[0];
return (
//   currentDescription.push(currentHousing.description);
//   return 
      console.log({currentHousing})

    )
}

export default Dropdown;
