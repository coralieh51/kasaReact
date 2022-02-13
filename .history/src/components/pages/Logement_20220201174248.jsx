import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  console.log(logements.data.filter(logement => logement.id === id ))

  return (
    logements.data.filter(logement => logement.id === id).map(logementId => (
      <div key={logementId}>
      <img src={logementId.cover} alt="vue logement" />
      <p>{logementId.location}</p>
    </div>
    ))
  );
}

export default Logement;
