import AccountContentWrapper from "../../components/AccountContentWrapper/index.jsx";
import Button from "../../components/Button/index.jsx";

function UserPage() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          Tony Jarvis!
        </h1>
        <Button classes="edit-button" text="Edit Name"/>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <AccountContentWrapper
        title="Argent Bank Checking (x8349)"
        amount="2,082.79"
        desc="Available Balance"
      />
      <AccountContentWrapper
        title="Argent Bank Savings (x6712)"
        amount="10,928.42"
        desc="Available Balance"
      />
      <AccountContentWrapper
        title="Argent Bank Credit Card (x8349)"
        amount="184.30"
        desc="Current Balance"
      />
    </main>
  );
}

export default UserPage;
