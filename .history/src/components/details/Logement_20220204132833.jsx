import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
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
    return <p color="red">l'id n'existe pas.</p>;
  } else {
    return (
      <main>
        {currentHousing.pictures.map((picture) => (
          <img key={picture} src={picture} alt="" />
        ))}
        <p>{currentHousing.location}</p>
        <Tags id={id} />
        <HostInfos hostname={currentHousing.host.name} hostpicture= />
        <Ratings id={id} />
        <Dropdown type="description" content={[currentHousing.description]} />
        <Dropdown type="equipments" content={currentHousing.equipments} />
      </main>
    );
  }
}

export default Housing;
