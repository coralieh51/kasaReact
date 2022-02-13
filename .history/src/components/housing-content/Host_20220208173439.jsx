import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <className="host" >
      <span>{hostname}</span>
      <img src={hostpicture} alt={ hostname }/>
    </>
  );
}

export default HostInfos;
