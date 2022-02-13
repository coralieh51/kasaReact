import React from "react";

function Dropdown( {content} ) {

  return (
<ul>
  <li>{content.map()}</li>
</ul>
  );
}

export default Dropdown;
