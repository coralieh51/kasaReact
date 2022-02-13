import React, { useState } from "react";

function Dropdown( {type, content} ) {
  const [isOpen, setIsOpen] = useState(true);
  
  return isOpen ? (

    <ul className="dropdown">
      <h4 onClick={()=>setIsOpen(false); set}>{type}</h4>
      {content.map((contentElement) => (
        <li className="dropdown" key={contentElement[0]}>
          {contentElement}
        </li>
      ))}
    </ul>
  ) : (
    <ul className="dropdown">
      <h4 onClick={()=>setIsOpen(true)}>{type}</h4>
    </ul>
  );
}

export default Dropdown;
