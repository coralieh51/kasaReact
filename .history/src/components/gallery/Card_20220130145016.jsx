import logements from "../../assets/data/logements.json"

function Card() {
    return(
        {daata.map(logement => {
            <ul>
            <li className="texttest">{logement.id}</li>
            </ul>
        })}
    )
}

export default Card;