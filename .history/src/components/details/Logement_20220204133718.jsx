import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "./Tags";
import Tags from "./Tags";
import HostInfos from "./Host";
import Ratings from "./Rating";
import Dropdown from "./Dropdown";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];

  if (!currentHousing) {
    return <p>l'id n'existe pas.</p>;
  } else {
    return (
      <main>
        <Slider pictures={currentHousing.pictures} />
        <p>{currentHousing.location}</p>
        <Tags id={id} />
        <HostInfos hostname={currentHousing.host.name} hostpicture={currentHousing.host.picture} />
        <Ratings id={id} />
        <Dropdown type="description" content={[currentHousing.description]} />
        <Dropdown type="equipments" content={currentHousing.equipments} />
      </main>
    );
  }
}

export default Housing;
