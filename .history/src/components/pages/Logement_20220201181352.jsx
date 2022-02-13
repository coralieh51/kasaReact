import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";

function Housinv() {
  const { id } = useParams();
  const currentHousinv = logements.data.filter(logement => logement.id === id)[0];

  return (
      <div>
      <img src={currentHousinv.cover} alt={currentHousinv.title} />
      <p>{currentLogement.location}</p>
    </div>
  )
}

export default Housinv;