import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <main>
      <div className="error">
        <h2>404</h2>
        <p>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
    </main>
  );
}

export default Error;
