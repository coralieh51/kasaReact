import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logementL.id => {
            <div>logement.name</div>
        })
    )
}

export default Card;