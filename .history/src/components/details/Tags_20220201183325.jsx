import react from "react";
import { useParams } from "react-router-dom";
import logements from "../../assets/data/logements.json";

function Tags() {

    const { id } = useParams()
    const currentHousing = logements.data.filter(logement => logement.id === id)[0];
    return(
        
            currentHousing.tags.map(tag => {
                <span>{tag}</span>
            })
        )
}

export default Tags;