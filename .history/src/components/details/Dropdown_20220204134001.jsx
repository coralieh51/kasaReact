import React from "react";

function Dropdown({ content }) {
  return (
    <ul>
      {content.map((contentElement) =>
      <li key={}>{contentElement}</li>)}
    </ul>
  );
}

export default Dropdown;