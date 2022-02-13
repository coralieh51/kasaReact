import React from "react";
import logements from "../../assets/data/logements.json";

function Tags() {

    return (
        <span>
            {tags.map(tag => (
                {tag}
                ))}
            </span>
        )
    }

export default Tags;