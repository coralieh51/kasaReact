import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement => {
            <div></div>
        })
    )
}

export default Card;