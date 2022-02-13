import logements from "../../assets/data/logements.json"

function Cards() {
    if (logements) {
        
    }
    return(
        <ul>
        {logements.data.map((logement) => (
            <li className="texttest">{logement.title}</li>
        ))}
        </ul>
    )
}

export default Cards;