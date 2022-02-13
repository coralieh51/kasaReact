import React from "react";
import logements from "../../assets/data/logements.json";

function HostInfos({ id }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return (
    <>
      <span>{currentHousing.host.name}</span>
      <img src={currentHousing.host.picture} alt={``}/>
    </>
  );
}

export default HostInfos;
