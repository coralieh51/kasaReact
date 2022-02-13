import React from "react";



function HostInfos({ hostname, hostpicture }) {
  return (

    <figure className="host">
      <p>{hostnames[0]}</p>
      <p>{hostnames[1]}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
