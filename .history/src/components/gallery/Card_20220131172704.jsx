import { Link } from "react-router-dom";
import logements from "../../assets/data/logements.json";

function Card() {
  if (logements) {
    return (
        {logements.data.map((logement) => (
                <Link to=`/${logement.id}`>
          <figure className="logement-picture" >
            <img src={logement.cover} />
            <figcaption className="card-caption">{logement.title}</figcaption> 
          </figure>
        ))}</Link>
    );
  }
}
                
export default Card;
