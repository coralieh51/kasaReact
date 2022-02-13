import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
        <>
        {logements.data.map((logement) => (
          <img src={logement.cover} className="card">{logement.title}/></img>
        ))}
        </>
    );
  }
}

export default Card;
