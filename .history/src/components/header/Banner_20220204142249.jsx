import React from "react";
import bgbanner from "../../assets/img/homeBanner-m.png";

function Banner() {
  return (
    <figure className="bgbanner">
      <img src={bgbanner} alt="grey mountain view" className="banner about"></img>
      <figcaption>Chez vous,<br/>partout et ailleurs</figcaption>
    </figure>
  );
}

export default Banner;
