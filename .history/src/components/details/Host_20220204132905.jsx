import React from "react";

function HostInfos({ hostname, host }) {
  return (
    <>
      <span>{currentHousing.host.name}</span>
      <img src={currentHousing.host.picture} alt={ currentHousing.host.name }/>
    </>
  );
}

export default HostInfos;
