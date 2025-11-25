import logoSrc from "../../assets/img/argentBankLogo.webp";
import { Link } from "react-router-dom";

function Header() {
  const isLogged = true;
  const username = "JohnDoe";
  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo" aria-label="Accueil">
          <img
            className="main-nav-logo-image"
            src={logoSrc}
            alt="Argent Bank Logo"
          />
        </Link>
        <h1 className="sr-only">Argent Bank</h1>
        <div>
          {isLogged ? (
            <>
              <Link to="/user" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {username}
              </Link>
              <Link to="/" className="main-nav-item" aria-label="Accueil">
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link to="/sign-in" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              <i className="fa fa-sign-out"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
