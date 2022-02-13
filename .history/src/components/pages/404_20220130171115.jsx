import Header from "../Header/Header";

function ErrorPage() {
  return (
    <div className="error">
      <Header />
      <h2>404</h2>
      <aside>Oups! La page que<br/>vous demandez n'existe pas.</aside>
      
    </div>
  );
}

export default ErrorPage;
