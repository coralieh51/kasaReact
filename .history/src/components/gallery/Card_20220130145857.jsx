import logements from "../../assets/data/logements.json";

function Cards() {
  if (logements) {
    return (
        {logements.data.map((logement) => (
          <div className="texttest">{logement.title}</div>
        ))}
      </div>
    );
  }
}

export default Cards;
