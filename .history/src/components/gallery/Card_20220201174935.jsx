import React from "react";
import { Link } from "react-router-dom";
import logements from "../../assets/data/logements.json";
import Logement from "../pages/Logement";

function Card() {
  console.log(logements.data);
  if (logements) {
    return logements.data.map((logement) => (
      <Link to={<Logement/>}>
        <figure className="logement-picture">
          <img src={logement.cover} alt="" />
          <figcaption className="card-caption">{logement.title}</figcaption>
        </figure>
      </Link>
    ));
  }
}

export default Card;