import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Tags from "./Tags";
import HostInfos from "./Host";
import Ratings from "./Rating";
import Dropdown from "./Dropdown";

function handleDropdown() {
  const children = document.querySelectorAll(".dropdown li");
  children.forEach(child => child.classList.toggle("isOpen"));
}

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
        <Tags tags={currentHousing.tags} />
        <HostInfos hostname={currentHousing.host.name} hostpicture={currentHousing.host.picture} />
        <Ratings range={currentHousing.rating} />
        <Dropdown onclick={handleDropdown(children)} className="dropdown" type="description" content={[currentHousing.description]} />
        <Dropdown className="dropdown" type="equipements" content={currentHousing.equipments} />
      </main>
    );
  }
}

export default Housing;
