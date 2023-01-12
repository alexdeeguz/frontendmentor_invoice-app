import { useNavigate } from "react-router-dom";
import BackButton from "../common/BackButton";
import Button from "../common/Button";
import "./details.css";
import Drawer from "./drawer/Drawer";
import Overlay from "./drawer/Overlay";
import DeleteModal from "./modal/DeleteModal";

const Details = () => {
  const navigate = useNavigate()

  const handleClickEdit = (e) => {
    e.preventDefault();
    if (e.target.className.includes("mobile")) {
      navigate("/invoices/1/edit")
    } else {
      document.getElementById("drawer").style.transform = "translateX(0)";
      document.getElementById("overlay").style.display = "block";
    }
  };

  const handleClickDelete = () => {
    // document.getElementById("action-buttons-mobile").style.display = "none";
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay--delete").style.display = "block";
  };
  return (
    <div>
      <DeleteModal />
      <Overlay />
      <Drawer />
      <div className="details">
        <BackButton />

        <div className="card details__actions">
          <div className="details__status">
            <p>Status</p>
            <ul className="tag">
              <div className="tag__bg"></div>
              <li>Paid</li>
            </ul>
          </div>

          <div className="details__action-buttons">
            <Button onClick={handleClickEdit} className="secondary">
              Edit
            </Button>
            <Button onClick={handleClickDelete} className="danger">
              Delete
            </Button>
            <Button className="primary">Mark as Paid</Button>
          </div>
        </div>

        <div className="card details__main">
          <div className="details__main--1">
            <div>
              <h3>#XM9141</h3>
              <p>Graphic Design</p>
            </div>
            <div>
              <p>11111 Something Ave</p>
              <p>Los Angeles, CA 91919</p>
              <p>United States</p>
            </div>
          </div>

          <div className="details__main--2">
            <div className="details__main--2-sub">
              <div>
                <div>
                  <p>Invoice Date</p>
                  <h2>21 Aug 2021</h2>
                </div>
                <div>
                  <p>Payment Due</p>
                  <h2>20 Sep 2021</h2>
                </div>
              </div>

              <div>
                <div>
                  <p>Bill To</p>
                  <h2>Alex Grim</h2>
                </div>
                <div>
                  <p>11111 Something Ave</p>
                  <p>Los Angeles, CA 91919</p>
                  <p>United States</p>
                </div>
              </div>
            </div>

            <div>
              <p>Sent to</p>
              <h2>alexgrim@mail.com</h2>
            </div>
          </div>

          <table className="details__footer">
            <thead>
              <tr>
                <td>Item Name</td>
                <td>QTY.</td>
                <td>Price</td>
                <td>Total</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Banner Design</td>
                <td>1</td>
                <td>$156.00</td>
                <td>$156.00</td>
              </tr>
            </tbody>
          </table>
          <div className="details__grand-total details__grand-total--desktop">
            <p>Grand Total</p>
            <h1>$556.00</h1>
          </div>

          <div className="details__footer--mobile">
            <div className="details__total--item">
              <div>
                <h3>Banner Design</h3>
                <p>1 x $156.00</p>
              </div>
              <p>$156.00</p>
            </div>

            <div className="details__total--item">
              <div>
                <h3>Banner Design</h3>
                <p>1 x $156.00</p>
              </div>
              <p>$156.00</p>
            </div>

            <div className="details__grand-total">
              <p>Grand Total</p>
              <h1>$556.00</h1>
            </div>
          </div>
        </div>
      </div>
      <div
        id="action-buttons-mobile"
        className="details__action-buttons--mobile"
      >
        <Button className="secondary mobile" onClick={handleClickEdit}>
          Edit
        </Button>
        <Button className="danger" onClick={handleClickDelete}>
          Delete
        </Button>
        <Button className="primary">Mark as Paid</Button>
      </div>
    </div>
  );
};

export default Details;
