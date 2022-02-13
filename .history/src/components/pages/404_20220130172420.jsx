import { Link } from "react-router-dom";
import Header from "../Header/Header";

function ErrorPage() {
  return (
      <>
      <Header />
    <div className="error">
      <h2>404</h2>
      <aside>Oups! La page que<br/>vous demandez n'existe pas.</aside>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
    </>
  );
}

export default ErrorPage;
