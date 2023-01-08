import "./invoices.css";

const Invoices = () => {
  return (
    <div className="invoices__header">
      <div>
        <h1>Invoices</h1>
        <p className="invoices--sub">7 invoices</p>
      </div>

      <div className="btn__actions">
        <div className="filter">
            <p>Filter</p>
            <img src="/assets/icon-arrow-down.svg" />
        </div>

        <div className="btn--add">
            <div>
                <img src="assets/icon-plus.svg" />
            </div>
            <p>New</p>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
