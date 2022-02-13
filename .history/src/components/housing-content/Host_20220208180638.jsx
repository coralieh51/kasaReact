import React from "react";

const hostnames = hostname.split(" ")
function HostInfos({ hostname, hostpicture }) {
  return (

    <figure className="host">
      <p>{hostname}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
