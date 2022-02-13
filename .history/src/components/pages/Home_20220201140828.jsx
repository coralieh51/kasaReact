import React from "react";
import ReactDOM from "react-dom";
import Header from "../header/Header"
import Gallery from "../gallery/Gallery"
import Banner from "../header/Banner"
import Footer from "../footer/Footer"

function Home() {
    return(
        <>
       <Header/>
       <Banner />
       <Gallery/>
       <Footer />
        </>
    )
}

export default Home;