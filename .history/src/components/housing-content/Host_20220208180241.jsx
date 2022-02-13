import React from "react";



function HostInfos({ hostname, hostpicture }) {
  const hostnames = hostname.split;
  return (

    <figure className="host">
      <p>{hostnames0}</p>
      <p>{hostnames1}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
