import Button from "../Button/index.jsx";

function AccountContentWrapper({ title, amount, desc }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">${amount}</p>
        <p className="account-amount-description">{desc}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button classes="transaction-button" text="View transactions" />
      </div>
    </section>
  );
}

export default AccountContentWrapper;
