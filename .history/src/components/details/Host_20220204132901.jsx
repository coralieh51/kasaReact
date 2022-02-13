import React from "react";

function HostInfos({ hostname }) {
  return (
    <>
      <span>{currentHousing.host.name}</span>
      <img src={currentHousing.host.picture} alt={ currentHousing.host.name }/>
    </>
  );
}

export default HostInfos;
