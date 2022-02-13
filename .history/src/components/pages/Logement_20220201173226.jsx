import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  console.log(id)
  return (
    logements.data.filter(logements.id === { id }).map(logementId => (
      <div>
      <img src={logementId.cover} alt="vue logement" />
      <p>{logementId.location}</p>

    </div>
    ))
  );
}

export default Logement;
