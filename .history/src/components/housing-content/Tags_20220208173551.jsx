import React from "react";

function Tags({ tags }) {
  return tags.map((tag) => <span className)key={tag}>{tag}</span>);
}

export default Tags;