import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(logement => logement.id === id)[0];

  return (
      <div>
      <img src={currentHousing.cover} alt={currentHousing.title} />
      <p>{currentLogement.location}</p>
    </div>
  )
}

export default Housing;