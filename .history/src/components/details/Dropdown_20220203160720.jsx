import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
    const currentDescription = []
    const currentHousing = logements.data.filter(
        (logement) => logement.id === id
        )[0];
        currentDescription.push(currentHousing.description)
        return (
        console.log(currentDescription)
            <select name={type}>
      {type};
      <option>
        {currentHousing}.{`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  );
}

export default Dropdown;
