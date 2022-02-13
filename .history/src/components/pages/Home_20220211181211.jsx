import React from "react";
import Gallery from "../gallery/Gallery";
import Banner from "../header/Banner";
import Footer from "../footer/Footer";

function Home() {
  return (
    <>
      <main>
        <Banner />
        <Gallery />
        <Footer />
      </main>
    </>
  );
}

export default Home;
