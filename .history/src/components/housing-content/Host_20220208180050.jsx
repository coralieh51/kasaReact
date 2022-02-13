import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (

    <figure className="host">
      <p>{hostnames}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
