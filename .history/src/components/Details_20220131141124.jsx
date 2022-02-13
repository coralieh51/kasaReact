import logements from "../../assets/data/logements.json";

function Details() {
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
