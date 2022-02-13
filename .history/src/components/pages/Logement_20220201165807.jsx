import React from "react";
import logements from "../../assets/data/logements.json";

function Logement() {
  return (
      logements.data.map((logement) => {
          <div>
        <img src={logement.cover} alt="" />;
      })
      </div>
  );
}

export default Logement;
