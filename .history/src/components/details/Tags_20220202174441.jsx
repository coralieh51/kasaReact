import React from "react";
import logements from ""

function Tags({id}) {
  return (
    <>
        <span>{logements.filter(logement =>(logement.id === id))}</span>
    </>
  );
}
export default Tags;
