import React from "react";
import bgbanner from "../../assets/img/homeBanner.png";

function Banner() {
  return (
    <figure className="bgbanner">
      <img src={bgbanner} alt="grey mountain view" className="banner"></img>
      <figcaption>Chez vous,<br/>partout et ailleurs</figcaption>
    </figure>
  );
}

export default Banner;
