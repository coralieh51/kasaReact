import React from "react";

function Tags({id}) {
  return (
    <>
        <span>{logements.filter(logement =>(logement.id === id)).map(tag => (tag))}</span>
    </>
  );
}
export default Tags;