import React from "react";
import logements from "../../assets/data/logements.json";
import { useParams, Navigate  } from "react-router-dom";
import Slider from "../housing-content/Slider";
import Tags from "../housing-content/Tags";
import HostInfos from "../housing-content/Host";
import Ratings from "../housing-content/Rating";
import Dropdown from "../housing-content/Dropdown";

function Housing() {
  const { id } = useParams();
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
    )[0];
  
  if (currentHousing === undefined ) {return <Navigate replace to="/error" />};

  return (
    <main id="housingDetails">
        <Slider pictures={currentHousing.pictures} />
      <div className="aboutHousing">
        <div className="leftContent">
          <p className="location">{currentHousing.location}</p>
          <div className="tagsContainer">
            <Tags tags={currentHousing.tags} />
          </div>
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
        <Dropdown type="description" content={[currentHousing.description]} />
        <Dropdown type="equipements" content={currentHousing.equipments} />
      </div>
    </main>
  );
}

export default Housing;