import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement[0].id => {
            <div>logement.name</div>
        })
    )
}

export default Card;