import react from "react";
import logements from "../../assets/data/logements.json";

function Tags() {

    const currentHousing = logements.
    return(
        {
            {currentHousing.tags.map(tag => {
                <span>{tag}</span>
            })}
        })
}

export default Tags;