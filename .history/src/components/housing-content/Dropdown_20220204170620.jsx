import React, { useState } from "react";

function Dropdown( {open}) {
  const [isOpen, setIsOpen] = useState(false);
  
  return open ? (

    <ul className="dropdown">
      <h4 onClick={open({setIsOpen})}>{type}</h4>
      {content.map((contentElement) => (
        <li className="dropdown" key={contentElement[0]}>
          {contentElement}
        </li>
      ))}
    </ul>
  ) : (
    <ul className="dropdown">
      <h4 onClick={()>{type}</h4>
    </ul>
  );
}

export default Dropdown;
