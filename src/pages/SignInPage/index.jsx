import { useDispatch } from "react-redux";
import { getToken } from "../../store.js";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.username.value;
    const password = e.target.password.value;

    const result = await getToken(email, password);
    if (result?.body.token) {
      dispatch({ type: "LOGIN", payload: { username: email } });
      navigate("/user");
    } else {
      dispatch({
        type: "LOGIN_FAILURE",
        payload: { error: "Échec de la connexion" },
      });
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
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
            <input type="checkbox" id="remember-me" />
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
