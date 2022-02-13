import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  const currentLogement = logements.data.filter(logement => logement.id === id)[0];

  return (
      <div>
      <img src={currentLogement.cover} alt={currentLogement.title} />
      <p>{currentLogement.location}</p>
    </div>
  )
}

export default Logement;