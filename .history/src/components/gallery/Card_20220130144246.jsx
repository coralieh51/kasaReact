import logements from "../../assets/data/logements.json"

function Card() {
    return(
        <>
        logements.map(logement => {
            <div className="texttest">logement.id</div>
        </>
        })
    )
}

export default Card;