import React from "react";

function HostInfos({ hostname, hostpicture }) {
  return (
    <figure >
      <span>{hostname}</span>
      <img src={hostpicture} alt={hostname} />
    </figure>
  );
}

export default HostInfos;
