import logements from "../../assets/data/logements.json";

function Cards() {
  if (logements) {
    return (
      <div>
        {logements.data.map((logement) => (
          <div className="texttest">{logement.title}</li>
        ))}
      </div>
    );
  }
}

export default Cards;