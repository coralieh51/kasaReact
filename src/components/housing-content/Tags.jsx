import React from "react";

function Tags({ tags }) {
  return tags.map((tag) => <span className="tags" key={tag}>{tag}</span>);
}

export default Tags;