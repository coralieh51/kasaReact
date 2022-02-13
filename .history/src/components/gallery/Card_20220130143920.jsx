import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement => {
            <div>logement</div>
        })
    )
}

export default Card;