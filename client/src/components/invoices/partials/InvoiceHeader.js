const InvoiceHeader = ({ handleClickNew }) => {
  return (
    <div className="invoices__header">
      <div className="invoices__header--left">
        <h1>Invoices</h1>
        <p>7 invoices</p>
      </div>

      <div className="invoices__header--right">
        <div className="filter__button">
          <p>Filter</p>
          <img src="/assets/icon-arrow-down.svg" alt="down arrow" />
        </div>
        <div
          className="new__button new__button--desktop"
          onClick={handleClickNew}
        >
          <img src="/assets/icon-plus.svg" alt="plus icon" />
          <p>New</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceHeader;
