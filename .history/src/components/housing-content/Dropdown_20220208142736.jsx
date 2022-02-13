import React, { useState } from "react";
import arrow from "../../assets/img/arrow.svg";

function Dropdown( {type, content} ) {
  const [isOpen, setIsOpen] = useState(true);
  
  return isOpen ? (

    <ul className="dropdown">
      <h4 onClick={()=>setIsOpen(false)}>{type}<img className="close" src={arrow}/></h4>
      {content.map((contentElement) => (
        <li className="dropdown" key={contentElement[0]}>
          {contentElement}
        </li>
      ))}
    </ul>
  ) : (
    <ul className="dropdown">
      <h4 onClick={()=>setIsOpen(true)}>{type}<img className="open" src={arrow}/></h4>
    </ul>
  );
}

export default Dropdown;
