import React from "react";

function Dropdown({ content, type, open }) {
  
  return (
    (open ? <ul className="dropdown">
    <h4>{type}</h4>
    {content.map((contentElement) => (
      <li className="dropdown isOpen" key={contentElement[0]}>
        {contentElement}
      </li>
    ))}
  </ul> : )
    
  );
}

export default Dropdown;