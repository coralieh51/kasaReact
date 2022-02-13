import React from "react";
import logements from "../../assets/data/logements.json"

function Tags({id}) {
  return (
    <>
        <span>{logements.filter(logement =>(logement.id === id)).map(tag => (tag))}</span>
    </>
  );
}
export default Tags;
