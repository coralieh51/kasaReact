import logements from "../../assets/data/logements.json"

function Card() {
    return(
        <ul></ul>
        {logements.data.map((logement) => {
            <li className="texttest">{logement.id}</li>
        })}
    )
}

export default Card;