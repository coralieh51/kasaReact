import React from "react";

function Dropdown({ content }) {
  return (
    <ul> {type}
      {content.map((contentElement) =>
      <li key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;
