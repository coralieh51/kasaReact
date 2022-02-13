import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <figure className="host">
      <p>{hostname}.spl</p>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
