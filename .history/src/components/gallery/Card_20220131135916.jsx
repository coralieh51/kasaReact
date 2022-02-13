import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
      <>
        {logements.data.map((logement) => (
          <figure className="logement-picture" >
            <img src={logement.cover} />
            <figcaption className="card-caption">{logement.title}</figcaption>
          </figure>
        ))}
      </>
    );
  }
}

function Details() {
  if(logements)
}

export default Card;
export default Details;
