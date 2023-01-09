const InvoicesHeader = () => {
  return (
    <div className="container invoices__header">
      <div>
        <h1>Invoices</h1>
        {/* TODO: replace 7 with data length */}
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

export default InvoicesHeader;
