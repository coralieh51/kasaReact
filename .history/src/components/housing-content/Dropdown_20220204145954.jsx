import React from "react";

function Dropdown({ content, type }) {
  return (
    <ul className="dropdown"> <span>{type}</h2>
      {content.map((contentElement) =>
      <li className="dropdown" key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
