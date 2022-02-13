import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement[0] => {
            <div>logement.id</div>
        })
    )
}

export default Card;