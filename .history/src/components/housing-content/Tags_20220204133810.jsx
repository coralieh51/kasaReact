import React from "react";

function Tags({ tags }) {
  return tags.map((tag) => <span key={tag}>{tag}</span>);
}

export default Tags;