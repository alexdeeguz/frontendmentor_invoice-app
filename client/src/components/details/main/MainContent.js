import Button from "../../common/buttons/Button";
import BackButton from "../../common/buttons/BackButton";

const MainContent = ({
  invoice,
  darkMode,
  darkModeBg,
  darkModeLightBg,
  handleClickDelete,
  handleClickEdit,
  handleClickMarkAsPaid,
}) => {
  const {
    id,
    paymentDue,
    clientName,
    clientEmail,
    clientAddress,
    status,
    total,
    description,
    senderAddress,
    items,
    paymentTerms,
  } = invoice;

  const invoiceDate = invoice
    ? new Date(invoice?.createdAt?.split("T")[0].split("-").join("/"))
    : "";
  const paymentDueDate = invoice
    ? new Date(invoice?.createdAt?.split("T")[0].split("-").join("/"))
    : new Date();
  paymentDueDate?.setDate(paymentDueDate?.getDate() + Number(paymentTerms));

  const tagColor =
    status === "pending"
      ? "tag--pending"
      : status === "paid"
      ? "tag--success"
      : `tag--neutral ${darkMode ? "tag--neutral--dark" : null}`;
  const tagBackground =
    status === "pending"
      ? "tag__bg--pending"
      : status === "paid"
      ? "tag__bg--success"
      : `tag__bg--neutral ${darkMode ? "tag__bg--neutral--dark" : null}`;

  return (
    <div className="details">
      <BackButton />

      <div className={`card details__actions ${darkModeBg}`}>
        <div className="details__status">
          <p>Status</p>
          <ul className={`tag ${tagColor}`}>
            <div className={`tag__bg ${tagBackground}`}></div>
            <li>{status}</li>
          </ul>
        </div>

        <div className="details__action-buttons">
          {status !== "paid" && (
            <Button onClick={handleClickEdit} className="secondary">
              Edit
            </Button>
          )}
          <Button onClick={handleClickDelete} className="danger">
            Delete
          </Button>
          {status !== "paid" && status !== "draft" && (
            <Button className="primary" onClick={handleClickMarkAsPaid}>
              Mark as Paid
            </Button>
          )}
        </div>
      </div>

      <div className={`card details__main ${darkModeBg}`}>
        <div className="details__main--1">
          <div>
            <h3>#{id}</h3>
            <p>{description}</p>
          </div>
          <div>
            <p>{senderAddress?.street}</p>
            <p>{senderAddress?.city}</p>
            <p>{senderAddress?.country}</p>
          </div>
        </div>

        <div className="details__main--2">
          <div className="details__main--2-sub">
            <div>
              <div>
                <p>Invoice Date</p>
                <h2>{new Date(invoiceDate).toDateString()}</h2>
              </div>
              <div>
                <p>Payment Due</p>
                <h2>{new Date(paymentDueDate).toDateString()}</h2>
              </div>
            </div>

            <div>
              <div>
                <p>Bill To</p>
                <h2>{clientName}</h2>
              </div>
              <div>
                <p>{clientAddress?.street}</p>
                <p>{clientAddress?.city}</p>
                <p>{clientAddress?.country}</p>
              </div>
            </div>
          </div>

          <div>
            <p>Sent to</p>
            <h2>{clientEmail}</h2>
          </div>
        </div>

        <table className={`details__footer ${darkModeLightBg}`}>
          <thead>
            <tr>
              <td>Item Name</td>
              <td>QTY.</td>
              <td>Price</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {items?.map((item, idx) => (
              <tr key={idx}>
                <td>{item?.name}</td>
                <td>{item?.quantity}</td>
                <td>${item?.price?.toFixed(2)}</td>
                <td>${item?.total?.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="details__grand-total details__grand-total--desktop">
          <p>Grand Total</p>
          <h1>${total?.toFixed(2)}</h1>
        </div>

        <div className="details__footer--mobile">
          {items?.map((item, idx) => (
            <div className="details__total--item" key={idx}>
              <div>
                <h3>{item?.name}</h3>
                <p>
                  {item?.quantity} x ${item?.price?.toFixed(2)}
                </p>
              </div>
              <p>${item?.total?.toFixed(2)}</p>
            </div>
          ))}
          <div className="details__grand-total">
            <p>Grand Total</p>
            <h1>${total?.toFixed(2)}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
