import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement => {
            <li className="texttest">logement.id</div>
        })
    )
}

export default Card;