import React from "react";

function Dropdown({ content, type }) {
  return (
    <ul className="dropdown"> <h4 onClick={handleDropdown()}>{type}</h4>
      {content.map((contentElement) =>
      <li className="dropdown" key={contentElement[0]}>{contentElement}</li>)}
    </ul>
  );
}

handleDropdown({children}) {
  { chi}
}

export default Dropdown;
