import React from "react";
import logements from "../../assets/data/logements.json";

function Tags({ id }) {

    const currentHousing = logements.data.filter(logement => logement.id === id)[0];
    return (
        console.log(currentHousing)
    <span>
            {currentHousing.tags.map(tag => (
                {tag}
            ))}
            </span>
        )
}

export default Tags;