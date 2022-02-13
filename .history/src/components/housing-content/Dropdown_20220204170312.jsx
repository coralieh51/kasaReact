import React, { useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(true);
  
  return open ? (

    <ul className="dropdown">
      <h4 onClick={setIsOpen({open})}>{type}</h4>
      {content.map((contentElement) => (
        <li className="dropdown" key={contentElement[0]}>
          {contentElement}
        </li>
      ))}
    </ul>
  ) : (
    <ul className="dropdown">
      <h4>{type}</h4>
    </ul>
  );
}

export default Dropdown;
