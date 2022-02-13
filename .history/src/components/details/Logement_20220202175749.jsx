import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Tags from "./Tags";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(logement => logement.id === id)[0];

  return (
    
    currentHousing.pictures.map(picture => (
            <img src={currentHousing.cover} alt={currentHousing.title} />
    ))
      <div>
      <p>{currentHousing.location}</p>
      <Tags id={id} />
    </div>
  )
}

export default Housing;