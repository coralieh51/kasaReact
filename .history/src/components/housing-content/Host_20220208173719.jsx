import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <>
      <span className="host" >{hostname}</span>
      <img src={hostpicture} alt={ hostname }/>
    </>
  );
}

export default HostInfos;
