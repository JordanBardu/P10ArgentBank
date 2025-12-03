import AccountContentWrapper from "../../components/AccountContentWrapper/index.jsx";
import Button from "../../components/Button/index.jsx";
import accounts from "./account-content.json";
import { useSelector } from "react-redux";
import { usernameSelector } from "../../store.js";

function UserPage() {
  const username = useSelector(usernameSelector);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username}
        </h1>
        <Button classes="edit-button" text="Edit Name" />
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
