import React from "react";



function HostInfos({ hostname, hostpicture }) {
  const hostnames = hostname.split;
  return (

    <figure className="host">
      <p>{hostname}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
