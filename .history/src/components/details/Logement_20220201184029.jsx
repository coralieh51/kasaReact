import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Tags from "./Tags";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(logement => logement.id === id)[0];

  return (
      <div>
      <img src={currentHousing.cover} alt={currentHousing.title} />
      <p>{currentHousing.location}</p>
      <Tags key={}`${id}` id={id} />
    </div>
  )
}

export default Housing;