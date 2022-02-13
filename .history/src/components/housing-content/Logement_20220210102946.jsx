import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams } from "react-router-dom";
import Slider from "./Slider";
import Tags from "./Tags";
import HostInfos from "./Host";
import Ratings from "./Rating";
import Dropdown from "./Dropdown";
import Footer from "../footer/Footer";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];

  if (!currentHousing) {
    return <p>l'id n'existe pas.</p>;
  } else {
    return (
      <>
        <main id="housingDetails">
          <div className="slider">
            <Slider pictures={currentHousing.pictures} />
            <p>{currentHousing.location}</p>
          </div>
          <div className="aboutHousing">
            <Tags tags={currentHousing.tags} />
            <HostInfos
              hostname={currentHousing.host.name}
              hostpicture={currentHousing.host.picture}
            />
          </div>
          <Ratings range={currentHousing.rating} />
          <div className="housingDetails"></div>
          <Dropdown type="description" content={[currentHousing.description]} />
          <Dropdown type="equipements" content={currentHousing.equipments} />
        </main>
        <Footer />
      </>
    );
  }
}

export default Housing;
