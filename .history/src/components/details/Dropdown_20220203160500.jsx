import React from "react";
import logements from "../../assets/data/logements.json";

function Dropdown({ id, type }) {
    const currentDescription = []
    const currentDescription.push(currentHousing.description)
    const currentHousing = logements.data.filter(
        (logement) => logement.id === id
        )[0];
        return (
      console.log(currentDescription)
    <select name={type} color="red">
      {type};
      <option>
        {currentHousing}.{`${type}`.map((dropdownContent) => console.log(dropdownContent))}
      </option>
    </select>
  );
}

export default Dropdown;
