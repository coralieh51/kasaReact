import React from "react";
import { useParams } from "react-router-dom";
import logements from "../../assets/data/logements.json";

const { id } = useParams()
const currentHousing = logements.data.filter(logement => logement.id === id)[0];

console.log(currentHousing)
function Tags() {
  return <span></span>;
}

export default Tags;
