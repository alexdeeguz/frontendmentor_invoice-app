const InvoiceListItem = () => {
    return (
      <div className="invoice__item">
        <div>
          <p className="invoice__item--id">#RT3080</p>
          <p className="invoice__item--name">Jensen Huang</p>
        </div>

        <div className="invoice__status">
          <div>
            <p className="invoice__status--date">Due 19 Aug 2021</p>
            <p className="invoice__status--price">$1,800.90</p>
          </div>

          <div className="tag tag--success">
            <div className="tag__overlay tag__overlay--success"></div>
            <li>Paid</li>
          </div>
        </div>
      </div>
    );
}

export default InvoiceListItem