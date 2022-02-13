import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <figure>
    <br/>
      <span className="host" >{hostname}</span>
      <img src={hostpicture} alt={ hostname }/>
    </figure>
  );
}

export default HostInfos;
