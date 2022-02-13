import React from "react";
import logements from "../../assets/data/logements.json";

function Ratings({ id }) {
  const currentHousing = logements.data.filter(
    (logement) => logement.id === id
  )[0];
  return (
    <>
      <span>{currentHousing.ratings}</span>
    </>
  );
}

export default HostInfos;
