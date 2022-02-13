import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";

function Header() {
  return (
    <header>
      <Kasalogo className="" />
      <nav className="main-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
  );
}

export default Header;
