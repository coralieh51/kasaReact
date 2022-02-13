import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <img src={Logo} className="logo" alt="logo kasa" />;
        <nav className="main-nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
