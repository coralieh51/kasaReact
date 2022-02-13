import logements from "../../assets/data/logements.json"

function Cards() {
    return(
        <ul>
        {logements.data.map((logement) => (
            <li className="texttest">{logement.name}</li>
        ))}
        </ul>
    )
}

export default Cards;