import react from "react";
import logements from "../../assets/data/logements.json";

function Tags() {

    const currentHousing = logements.data.fil
    return(
        {
            {currentHousing.tags.map(tag => {
                <span>{tag}</span>
            })}
        })
}

export default Tags;