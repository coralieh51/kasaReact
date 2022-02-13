import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <>
      <span color="red">{hostname}</span>
      <img src={hostpicture} alt={ hostname }/>
    </>
  );
}

export default HostInfos;
