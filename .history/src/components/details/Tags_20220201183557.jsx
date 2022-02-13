import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../assets/data/logements.json";

function Tags() {

    const currentHousing = logements.data.filter(logement => logement.id === id)[0];
    return (
    <span>
            {currentHousing.tags.map(tag => (
                {tag}
            ))}
            </span>
        )
}

export default Tags;