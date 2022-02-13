import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
        <>
        {logements.data.map((logement) => (
          <img src="" className="card">{logement.title}</div>
        ))}
        </>
    );
  }
}

export default Card;
