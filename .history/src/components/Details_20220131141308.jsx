import logements from "../../";

function Details() {
  if (logements) {
    return (
      <>
        {logements.data.map((logement) => (
          <img src={logement.cover} />
          <h3>{logement.location}</h3>
        ))}
      </>
    );
  }
}
