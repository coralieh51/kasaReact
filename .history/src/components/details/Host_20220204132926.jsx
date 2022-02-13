import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <>
      <span>{hostname}</span>
      <img src={hostpicture} alt={ currentHousing.host.name }/>
    </>
  );
}

export default HostInfos;
