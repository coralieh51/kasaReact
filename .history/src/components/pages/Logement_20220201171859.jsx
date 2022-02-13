import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  return (
    logements.data.map(logement => (
      logement.filter
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
