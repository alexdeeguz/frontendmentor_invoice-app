import "./details.css";
import Drawer from "./drawer/Drawer";
import Overlay from "./drawer/Overlay";

const Details = () => {
    const handleClickEdit = (e) => {
        // e.preventDefault();
        document.getElementById("drawer").style.transform = "translateX(0)";
        document.getElementById("overlay").style.display = "block"
    }
  return (
    <div>
      <Overlay />
      <Drawer />
      <div className="details">
        <div className="back-btn">
          <img src="/assets/icon-arrow-left.svg" alt="left arrow" />
          <p>Go back</p>
        </div>

        <div className="card details__actions">
          <div className="details__status">
            <p>Status</p>
            <ul className="tag">
              <div className="tag__bg"></div>
              <li>Paid</li>
            </ul>
          </div>

          <div className="details__action-buttons">
            <button onClick={handleClickEdit}>Edit</button>
            <button>Delete</button>
            <button>Mark as Paid</button>
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
      <div className="details__action-buttons--mobile">
        <button>Edit</button>
        <button>Delete</button>
        <button>Mark as Paid</button>
      </div>
    </div>
  );
};

export default Details;
