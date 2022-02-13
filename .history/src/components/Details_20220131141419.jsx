import logements from "../../src/assets/data/logements.json";

function Details() {
  if (logements) {
    return (
      <>
        {logements.data.map((logement) => (
          <img src={logement.cover} alt="vue de la"/>
          <h3>{logement.location}</h3>
        ))}
      </>
    );
  }
}
