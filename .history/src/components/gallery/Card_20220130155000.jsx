import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
        <>
        {logements.data.map((logement) => (
          <figure>
              <img src={logement.cover}/>
              <figcaption className="card"></figcaption>
          </figure> 
          <p >{logement.title}</p>
        ))}
        </>
    );
  }
}

export default Card;
