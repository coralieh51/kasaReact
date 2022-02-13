import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (

    const {hostnames} = hostname.split("");
    <figure className="host">
      <p>{hostnames}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
