import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

function Error() {
  return (
    <>
      <div className="error">
        <h2>404</h2>
        <aside>
          Oups! La page que
          <br />
          vous demandez n'existe pas.
        </aside>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
        log
      <Footer />
    </>
  );
}

export default Error;
