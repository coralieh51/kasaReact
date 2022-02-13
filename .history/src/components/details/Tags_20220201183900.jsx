import React from "react";
import logements from "../../assets/data/logements.json";

function Tags({ id }) {

    const currentHousing = logements.data.filter(logement => logement.id === id)[0];
    return (
        <span>
            {currentHousing.tags.map(tag => (
                {tag}
                ))}
                console.log(currentHousing)
            </span>
        )
}

export default Tags;