import React from "react";
import logements from "../../assets/data/logements.json";

function Logement() {
  return (
    {logements.datamap((logement) => (
      <div>
      <img src={logement.cover} alt="vue logement" />
      <p>{logement.location}</p>
    </div>
    ))}
  );
}

export default Logement;
