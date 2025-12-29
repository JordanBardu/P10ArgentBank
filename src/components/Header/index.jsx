import logoSrc from "../../assets/img/argentBankLogo.webp";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInSelector, usernameSelector } from "../../store.js";

function Header() {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const username = useSelector(usernameSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("token");
    navigate("/");
  };

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
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="main-nav-item">
                <i className="fa fa-user-circle"></i>
                {username}
              </Link>
              <Link
                to="/"
                className="main-nav-item"
                aria-label="Accueil"
                onClick={handleLogout}
              >
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          ) : (
            <Link to="/login" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

export default Header;
