import React from "react";

function HostInfos({ id }) {
  return (
    <>
      <span>{currentHousing.host.name}</span>
      <img src={currentHousing.host.picture} alt={ currentHousing.host.name }/>
    </>
  );
}

export default HostInfos;
