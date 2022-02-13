import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <>
    <br/>
      <span className="host" >{hostname}</span>
      <img src={hostpicture} alt={ hostname }/>
    </>
  );
}

export default HostInfos;
