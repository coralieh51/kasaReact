import React from "react";

function Dropdown({ content }) {
  return (
    <ul className="dropdown">
      {content.map((contentElement) =>
      <li key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
