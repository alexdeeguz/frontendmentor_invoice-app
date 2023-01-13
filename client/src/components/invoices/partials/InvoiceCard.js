const InvoiceCard = ({ invoice }) => {
    console.log(invoice)
    const { id, paymentDue, clientName, status, total } = invoice
    return (
      <div className="invoice__card">
        <p className="invoice__card--item1">#{id}</p>
        <p className="invoice__card--item2">Due {new Date(paymentDue).toDateString()}</p>
        <p className="invoice__card--item4">{clientName}</p>
        <p className="invoice__card--item3">${total}</p>
        <ul className="invoice__card--item5 tag tag--success">
          <div className="invoice__card--item5-bg tag__bg tag__bg--success"></div>
          <li>{status}</li>
        </ul>
        <img src="/assets/icon-arrow-right.svg" alt="right arrow" />
      </div>
    );
}

export default InvoiceCard