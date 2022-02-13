import React from "react";

function Dropdown({ content, type }) {
  return (
    <ul className=""> {type}
      {content.map((contentElement) =>
      <li key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
