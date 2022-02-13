import React from "react";
import { Link } from "react-router-dom";
import {logo} from "../../assets/img/logo";

function Header() {
  return (
    <>
      <header className="header">
        <img src={logo} className="logo" alt="logo kasa" />;
        <nav className="main-nav">
          <Link to="/">Accueil</Link>
          <Link to="/about">A propos</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;