import React from "react";
import logements from "../../assets/data/logements.json";

function Logement() {
    return(
        logements.data.map(logement => {
            <img src={logements.cover} alt=""/>
        })
    )
}

export default Logement;