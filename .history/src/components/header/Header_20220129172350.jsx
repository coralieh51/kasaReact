import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";

function Header() {
    return (
      
      <Kasalogo/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    )
}

export default Header