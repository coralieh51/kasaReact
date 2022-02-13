import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
    const currentDescription = []
    const currentHousing = logements.data.filter(
        (logement) => logement.id === id
        )[0];
        currentDescription.push(currentHousing.description)
        return (
            <select name={type} color="red">
      {type};
      <option>
        console.log(currentDescription)
        {currentHousing}.{`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  );
}

export default Dropdown;
