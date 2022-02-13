import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
        <>
        {logements.data.map((logement) => (
          <img src={logement.cover} className="card">/></img>
          <p>{logement.title}</p>
        ))}
        </>
    );
  }
}

export default Card;
