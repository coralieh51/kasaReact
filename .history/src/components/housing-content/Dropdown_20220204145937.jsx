import React from "react";

function Dropdown({ content, type }) {
  return (
    <ul className="dropdown"> <h2>{type}</p>
      {content.map((contentElement) =>
      <li className="dropdown" key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
