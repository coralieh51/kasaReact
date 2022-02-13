import bgbanner from "../../assets/img/banner.png"

function Banner() {
    return(
        <div >
            <figureclassName="bgbanner">
        <img src={bgbanner} alt="grey mountain view" className="banner"></img>
        <figcaption>Chez vous, partout et ailleurs</figcaption>
        </figure>
        </div>
    )
}

export default Banner;