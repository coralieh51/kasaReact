import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement => {
            <div>logement[0].</div>
        })
    )
}

export default Card;