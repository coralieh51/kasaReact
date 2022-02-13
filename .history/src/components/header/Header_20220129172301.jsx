import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";

function Header() {
    return (
        <nav>
          <Kasalogo/>
            <Link to="/">Accueil</Link>
            <Link to="/">Accueil</Link>
        </nav>
    )
}

export default Header