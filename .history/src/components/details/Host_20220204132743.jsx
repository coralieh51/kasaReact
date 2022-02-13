import React from "react";
import logements from "../../assets/data/logements.json";

function HostInfos({ id }) {
  return (
    <>
      <span>{currentHousing.host.name}</span>
      <img src={currentHousing.host.picture} alt={ currentHousing.host.name }/>
    </>
  );
}

export default HostInfos;
