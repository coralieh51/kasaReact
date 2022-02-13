import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Tags from "./Tags";
import HostInfos from "./Host";
import Ratings from "./Rating";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];

  if (currentHousing) {
  return (
    <div>
      {currentHousing.pictures.map((picture) => (
        <img src={currentHousing.picture} alt={currentHousing.title} />
      ))}
      <p>{currentHousing.location}</p>
      <Tags id={id} />
      <HostInfos id={id} />
      <Ratings id={id} />
      {/* <Dropdown/> */}
    </div>
  );
} return <p></p>

export default Housing;