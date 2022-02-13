import logements from "../../assets/data/logements.json";

function Cards() {
  if (logements) {
    return (
        <>
        {logements.data.map((logement) => (
          <div bg className="card">{logement.title}</div>
        ))}
        </>
    );
  }
}

export default Cards;
