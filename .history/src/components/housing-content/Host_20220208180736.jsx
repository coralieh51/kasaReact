import React from "react";

function HostInfos({ hostname, hostpicture }) {
  const hostnames = hostname.split(" ");
  return (

    <figure className="host">
      <span>{hostnames[0]}<br/></span>
      <p>{hostnames[1]}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
