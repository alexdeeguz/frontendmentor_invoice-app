import "./invoices.css";

const Invoices = () => {
  return (
    <div className="container invoices">
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
          <div className="new__button">
            <img src="/assets/icon-plus.svg" alt="plus icon" />
            <p>New</p>
          </div>
        </div>
      </div>

      <div className="invoices__main">
        <div className="invoice__card">
          <p className="invoice__card--item1">#RT3080</p>
          <p className="invoice__card--item2">Due 19 Aug 2021</p>
          <p className="invoice__card--item4">Jenson Huang</p>
          <p className="invoice__card--item3">$1,800.90</p>
          <ul className="invoice__card--item5">
            <div className="invoice__card--item5-bg"></div>
            <li>Paid</li>
          </ul>
          <img src="/assets/icon-arrow-right.svg" alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

export default Invoices;
