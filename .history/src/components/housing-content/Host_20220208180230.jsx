import React from "react";



function HostInfos({ hostname, hostpicture }) {
  const hostnames = hostname.split;
  return (

    <figure className="host">
      <p>{hostnames.0}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
