import React, { useState } from "react";

function Dropdown({ content, type, open }) {
  const [isOpen, setIsOpen] = useState(true);
  
  document.querySelectorAll(.dropdown h4)

  return open ? (

    <ul className="dropdown">
      <h4>{type}</h4>
      {content.map((contentElement) => (
        <li className="dropdown isOpen" key={contentElement[0]}>
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
