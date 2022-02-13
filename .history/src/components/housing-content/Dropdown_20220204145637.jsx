import React from "react";

function Dropdown({ content, type }) {
  return (
    <ul className="dropdown"> {type}
      {content.map((contentElement) =>
      <li className="d" key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
