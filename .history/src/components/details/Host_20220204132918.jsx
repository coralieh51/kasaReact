import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <>
      <span>{hostname}</span>
      <img src={currentHousing.host.picture} alt={ currentHousing.host.name }/>
    </>
  );
}

export default HostInfos;
