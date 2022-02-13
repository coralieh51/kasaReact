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
          </div>
          <div className="aboutHousing">
            <div className="leftContent">
              <p className="location">{currentHousing.location}</p>
              <div className="tagsContainer"></div>
              <Tags tags={currentHousing.tags} />
            </div>
            <div className="rightContent">
              <HostInfos
                hostname={currentHousing.host.name}
                hostpicture={currentHousing.host.picture}
              />
              <span className="ratings">
                <Ratings range={currentHousing.rating} />
              </span>
            </div>
          </div>

          <div className="housingDropdowns">
            <Dropdown
              type="description"
              content={[currentHousing.description]}
            />
            <Dropdown type="equipements" content={currentHousing.equipments} />
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Housing;
