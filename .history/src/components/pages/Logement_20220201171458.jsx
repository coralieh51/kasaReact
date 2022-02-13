import React from "react";
import logements from "../../assets/data/logements.json";
import { usepa}

function Logement() {
  return (
    logements.data.map((logement) => (
      <div>
      <img src={logement.cover} alt="vue logement" />
      <p>{logement.location}</p>
      {logement.tags.map((tag) => (
      <span>{tag}</span>
      ))}
    </div>
    ))
  );
}

export default Logement;
