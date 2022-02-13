import React from "react";
import logements from "../../assets/data/logements.json";

function HostInfos({ id }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return currentHousing.host.map(() => (
    <>
      <span>{host.name}</span>
      <span>{host.}</span>
    </>
  ));
}

export default HostInfos;
