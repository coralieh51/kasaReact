import React from "react";
import Gallery from "../gallery/Gallery"
import Banner from "../header/Banner"
import Footer from "../footer/Footer"

function Home() {
    return(
        <>
        <div>
       <Banner />
       <Gallery/>
       <Footer />
       </div>
        </>
    )
}

export default Home;