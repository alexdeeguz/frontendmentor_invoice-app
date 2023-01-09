import BackButton from "./partials/BackButton";
import Status from "./partials/Status";
import Button from "./partials/Button";
import useWindowSize from "../../hooks/useWindowSize";
import Drawer from "./partials/Drawer";
import Modal from "./Modal"
const Details = () => {
  const width = useWindowSize().width;
  const invoiceTemplate = () => {
    return width >= 768 ? (
    //   <div className="template-container">
        <div className="invoice__details section">
          <div className="details">
            <div>
              <div className="flex">
                <div>
                  <p className="invoice__item--gray title">Invoice Date</p>
                  <p className="bold">21 Aug 2021</p>
                </div>

                <div>
                  <p className="invoice__item--gray title">Bill To</p>
                  <p className="bold">Alex Grim</p>
                </div>
              </div>

              <div className="flex">
                <div>
                  <p className="invoice__item--gray title">Payment Due</p>
                  <p className="bold">20 Sep 2021</p>
                </div>
                <div className="address">
                  <p className="invoice__item--gray">10111 Something Ave</p>
                  <p className="invoice__item--gray">Los Angeles, CA 91343</p>
                  <p className="invoice__item--gray">United States</p>
                </div>
              </div>
            </div>
            <div>
              <div className="section">
                <p className="invoice__item--gray">Sent to</p>
                <p className="bold">alexgrim@mail.com</p>
              </div>
            </div>
          </div>
        </div>
    //   </div>
    ) : (
      <>
        <div className="flex justify-between invoice__details section">
          <div>
            <div>
              <p className="invoice__item--gray title">Invoice Date</p>
              <p className="bold">21 Aug 2021</p>
            </div>

            <div>
              <p className="invoice__item--gray title">Payment Due</p>
              <p className="bold">20 Sep 2021</p>
            </div>
          </div>

          <div>
            <div>
              <p className="invoice__item--gray title">Bill To</p>
              <p className="bold">Alex Grim</p>
            </div>

            <div className="address">
              <p className="invoice__item--gray">10111 Something Ave</p>
              <p className="invoice__item--gray">Los Angeles, CA 91343</p>
              <p className="invoice__item--gray">United States</p>
            </div>
          </div>
        </div>

        <div className="section">
          <p className="invoice__item--gray">Sent to</p>
          <p className="bold">alexgrim@mail.com</p>
        </div>
      </>
    );
  };
  return (
    <div className="details-main-container">
      {/* <Modal /> */}
      <Drawer formType="edit" />
      <BackButton style={{ marginLeft: "24px", paddingTop: "32px" }} />
      <Status width={width} />

      <div className="card details-container">
        <div className="details-container__first">
          <div className="section">
            <p className="invoice__item--id">#XM9141</p>
            <p className="invoice__item--gray">Graphic Design</p>
          </div>

          <div className="address section">
            <p className="invoice__item--gray">10111 Something Ave</p>
            <p className="invoice__item--gray">Los Angeles, CA 91343</p>
            <p className="invoice__item--gray">United States</p>
          </div>
        </div>

        {invoiceTemplate()}

        <div className="price-container">
          <div className="price-details">
            <div>
              <p className="price__item">Banner Design</p>
              <p className="price__quantity">1 x $156.00</p>
            </div>
            <p className="price__total">$156.00</p>
          </div>
        </div>
        <div className="grand-total">
          <p className="grand-total__title">Grand Total</p>
          <p className="grand-total__price">$556.00</p>
        </div>
      </div>

      {width < 768 && (
        <div className="action-buttons">
          <Button title="Edit" backgroundColor="#F9FAFE" color="#7E88C3" />
          <Button title="Delete" backgroundColor="#EC5757" />
          <Button title="Mark as Paid" />
        </div>
      )}
    </div>
  );
};

export default Details;
