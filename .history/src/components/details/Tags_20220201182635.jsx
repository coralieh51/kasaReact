import react from "react";
import logements from "../../assets/data/logements.json";

function Tags() {
    return(
        {logements.data.map()}
    )
}

export default Tags;