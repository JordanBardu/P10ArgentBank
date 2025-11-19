import logoSrc from "../../assets/img/argentBankLogo.png";
import { Link } from "react-router-dom";

function Header() {
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
          <Link to="/sign-in" className="main-nav-item" aria-label="Accueil">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
