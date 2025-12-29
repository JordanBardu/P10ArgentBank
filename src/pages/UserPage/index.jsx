import AccountContentWrapper from "../../components/AccountContentWrapper/index.jsx";
import Button from "../../components/Button/index.jsx";
import accounts from "./account-content.json";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInSelector, usernameSelector } from "../../store.js";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function UserPage() {
  const dispatch = useDispatch();
  const username = useSelector(usernameSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [displayEditNameForm, setDisplayEditNameForm] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const handleEditName = () => {
    setDisplayEditNameForm(true);
  };

  const handleOnSave = async () => {
    try {
      dispatch({ type: "UPDATE_USERNAME", payload: { username: newUsername } });
      alert("Nom d'utilisateur mis à jour avec succès !");
    } catch (error) {
      dispatch({
        type: "UPDATE_USERNAME_FAILURE",
        payload: { error: "Échec de la mise à jour du nom d'utilisateur" },
      });
      console.error(error);
    }
    setDisplayEditNameForm(false);
  };

  // Faire un composant pour le formulaire ?

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username}
        </h1>
        <div className="edit-name-form-wrapper">
          {displayEditNameForm ? (
            <form className="edit-name-form">
              <div className="input-wrapper">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" disabled={true} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" disabled={true} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </div>
              <div className="buttons-wrapper">
                <Button
                  classes="save-button"
                  text="Save"
                  onClick={handleOnSave}
                  type="button"
                />
                <Button
                  classes="cancel-button"
                  text="Cancel"
                  onClick={() => setDisplayEditNameForm(false)}
                />
              </div>
            </form>
          ) : (
            <Button
              classes="edit-button"
              text="Edit Name"
              onClick={handleEditName}
            />
          )}
        </div>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map((account, index) => (
        <AccountContentWrapper
          key={index}
          title={account.title}
          amount={account.amount}
          desc={account.desc}
        />
      ))}
    </main>
  );
}

export default UserPage;
