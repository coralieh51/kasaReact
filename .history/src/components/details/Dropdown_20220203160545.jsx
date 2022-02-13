import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
    const currentDescription = [];
    currentDescription.push(currentHousing.description)
    const currentHousing = logements.data.filter(
        (logement) => logement.id === id
        )[0];
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
