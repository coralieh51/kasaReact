import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
        <>
        {logements.data.map((logement) => (
          <figure>
              <img src={logement.cover}/>
              
          </figure> 
          <p className="card">{logement.title}</p>
        ))}
        </>
    );
  }
}

export default Card;
