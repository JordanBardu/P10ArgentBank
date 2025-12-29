import { useDispatch } from "react-redux";
import { getToken } from "../../store.js";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.username.value;
    const password = e.target.password.value;

    const result = await getToken(email, password);
    if (result?.body.token) {
      dispatch({ type: "LOGIN", payload: { username: email } });
      if (rememberMe) {
        localStorage.setItem("token", result.body.token);
      }
      navigate("/profile");
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: "Échec de la connexion" },
      });
      handleError();
    }
  };

  const handleError = () => {
    setIsError(true);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        {isError && (
          <div className="error-message">
            <p>Nom d'utilisateur ou mot de passe incorrect</p>
          </div>
        )}
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignInPage;
