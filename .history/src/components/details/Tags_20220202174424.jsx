import React from "react";

function Tags({id}) {
  return (
    <>
        <span>{logements.filter(logement =>(logement.id === id))}</span>
    </>
  );
}
export default Tags;
