import React from "react";

function Dropdown({ content }) {
  return (
    <ul>
      content.map(contentElement =>
      <li>{contentElement}</li>)
    </ul>
  );
}

export default Dropdown;
