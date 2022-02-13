import React from "react";
import logements from "../../assets/data/logements.json";

function HostInfos({ id }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return currentHousing.host.map((hostinfos) => (
    <>
      <span>{hostinfos[0]}</span>
      <span>{hostinfos[1]}</span>
    </>
  ));
}

export default Hos;