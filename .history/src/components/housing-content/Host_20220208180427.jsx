import React from "react";



function HostInfos({ hostname, hostpicture }) {
  const hostnames = hostname.split("-");
  console.log(host)
  return (

    <figure className="host">
      <p>{hostnames[0]}</p>
      <p>{hostnames[1]}</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
