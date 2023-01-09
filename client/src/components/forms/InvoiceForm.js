import BackButton from "../invoices/partials/BackButton";
import Button from "../invoices/partials/Button";

const InvoiceForm = () => {
  return (
    <form className="invoice-form">
      <div>
        <BackButton />
        <h1>Edit #XM9141</h1>

        <div>
          <h3>Bill From</h3>

          <label>
            Street Address
            <input type="text" placeholder="Test" />
          </label>

          <div className="flex">
            <label>
              City
              <input type="text" placeholder="Test" />
            </label>
            <label>
              State
              <input type="text" placeholder="Test" />
            </label>
          </div>
          <div>
            <label>
              Zip Code
              <input type="text" placeholder="Test" />
            </label>
            <label>
              Country
              <input type="text" placeholder="Test" />
            </label>
          </div>
        </div>
        <br />
        <div>
          <h3>Bill To</h3>
          <label>
            Client's Name
            <input type="text" placeholder="Test" />
          </label>
          <label>
            Client's Email
            <input type="text" placeholder="Test" />
          </label>
          <label>
            Street Address
            <input type="text" placeholder="Test" />
          </label>

          <div className="flex">
            <label>
              City
              <input type="text" placeholder="Test" />
            </label>
            <label>
              State
              <input type="text" placeholder="Test" />
            </label>
          </div>
          <div>
            <label>
              Zip Code
              <input type="text" placeholder="Test" />
            </label>
            <label>
              Country
              <input type="text" placeholder="Test" />
            </label>
          </div>
        </div>

        <div>
          <label>
            Invoice Date
            <input type="date" />
          </label>

          <label>
            Payment Terms
            <select>
              <option>Net 30 Days</option>
            </select>
          </label>

          <label>
            Project Description
            <input type="text" placeholder="Test" />
          </label>
        </div>

        <div>
          <h2>Item List</h2>

          <label>
            Item Name
            <input type="text" placeholder="Test" />
          </label>
          <div className="flex">
            <label>
              Qty.
              <input type="number" step="1" />
            </label>
            <label>
              Price
              <input type="number" step=".01" />
            </label>
            <label>
              Total
              <input
                type="number"
                style={{ border: "none", paddingLeft: 0 }}
                placeholder="400.00"
              />
            </label>
            <img src="/assets/icon-delete.svg" />
          </div>

          <Button
            title="+ Add New Item"
            style={{ width: "100%", marginTop: "48px" }}
            backgroundColor="#F9FAFE"
            color="#7E88C3"
          />
        </div>
      </div>
      <div className="fill"></div>
      {/* <div className="action-buttons--edit"> */}
      <div>
        <Button title="Cancel" backgroundColor="#F9FAFE" color="#7E88C3" />
        <Button title="Save Changes" />
      </div>
      {/* </div> */}
    </form>
  );
};

export default InvoiceForm;
