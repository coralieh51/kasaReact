import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";

function Header() {
  return (
    <>
    <header className="header">
      <Kasalogo />
      <nav className="main-nav">
        <Link to="/">Accueil</Link>
        <Link to="/error">A propos</Link>
      </nav>
    </header>
      </>
  );
}

export default Header;
