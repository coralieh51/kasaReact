import React from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";

function ErrorPage() {
  return (
    <>
      <Header />
      <div className="error">
        <h2>404</h2>
        <aside>
          Oups! La page que
          <br />
          vous demandez n'existe pas.
        </aside>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </div>
      <Footer />
    </>
  );
}

export default ErrorPage;
