import { Link } from "react-router-dom";
import Kasalogo from "./Kasalogo";
import Banner from "./Banner";

function Header() {
  return (
    <header className="header">
      <Kasalogo />
      <nav className="main-nav">
        <Link to="/">Accueil</Link>
        <Link to="/about">A propos</Link>
      </nav>
    </header>
      <Banner />
      
  );
}

export default Header;
