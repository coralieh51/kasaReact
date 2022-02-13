import logements from "../../assets/data/logements.json"

function Card() {
    return(
        logements.map(logement => {
            <div className="tex">logement.id</div>
        })
    )
}

export default Card;