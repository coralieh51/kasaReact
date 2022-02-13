import React from "react";

function Dropdown({ content, type }) {
  return (
    <ul className="dropdown"> <h4 onClick={handle}>{type}</h4>
      {content.map((contentElement) =>
      <li className="dropdown" key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
