import logements from "../../assets/data/logements.json"

function Card() {
    return(
        {.map(logement => {
            <ul>
            <li className="texttest">{logement.id}</li>
            </ul>
        })}
    )
}

export default Card;