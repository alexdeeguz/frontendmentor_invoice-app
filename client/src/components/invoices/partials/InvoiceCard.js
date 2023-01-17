import { useNavigate } from "react-router-dom";

const InvoiceCard = ({ invoice, darkModeActiveText, darkModeActiveBg, darkMode }) => {
  const navigate = useNavigate();
  // console.log(invoice)
  const { id, paymentDue, clientName, status, total } = invoice;

  const tagColor =
    status === "pending"
      ? "tag--pending"
      : status === "paid"
      ? "tag--success"
      : `tag--neutral ${darkMode ? "tag--neutral--dark": ""}`;
  const tagBackground =
    status === "pending"
      ? "tag__bg--pending"
      : status === "paid"
      ? "tag__bg--success"
      : `tag__bg--neutral ${darkMode ? "tag__bg--neutral--dark" : ""}`;

  return (
    <div className={`invoice__card ${darkModeActiveBg}`} onClick={() => {navigate(`/invoices/${id}`)}}>
      <p className="invoice__card--item1">#{id}</p>
      <p className="invoice__card--item2">
        Due {new Date(paymentDue).toDateString()}
      </p>
      <p className="invoice__card--item4">{clientName}</p>
      <p className="invoice__card--item3">${total.toFixed(2)}</p>
      <ul className={`invoice__card--item5 tag ${tagColor}`}>
        <div
          className={`invoice__card--item5-bg tag__bg tag__bg--success ${tagBackground}`}
        ></div>
        <li>{status}</li>
      </ul>
      <img src="/assets/icon-arrow-right.svg" alt="right arrow" />
    </div>
  );
};

export default InvoiceCard;
