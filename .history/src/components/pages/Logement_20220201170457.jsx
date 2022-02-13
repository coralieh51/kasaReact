import React from "react";
import logements from "../../assets/data/logements.json";

function Logement() {
  return (
    <div>
    {logements.data.map((logement) => (
      <img src={logement.cover} alt="vue logement" />
      <h3></h>
    ))}
    </div>
  );
}

export default Logement;
