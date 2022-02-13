import React from "react";
import logements from "../../assets/data/logements.json";

function HostInfos({ id }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return (
    <>
      <span>{host.name}</span>
      <span>{host.picture}</span>
    </>
  );
}

export default HostInfos;
