import { Link } from "react-router-dom";
import Header from "../Header/Header";

function ErrorPage() {
  return (
    <div className="error">
      <Header />
      <h2>404</h2>
      <aside>Oups! La page que<br/>vous demandez n'existe pas.</aside>
      <Link 
    </div>
  );
}

export default ErrorPage;
