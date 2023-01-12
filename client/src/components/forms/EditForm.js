import Button from "../common/Button";
import "./forms.css";

const EditForm = () => {
  return (
    <div className="form-container">
      <div className="back-btn">
        <img src="/assets/icon-arrow-left.svg" alt="left arrow" />
        <p>Go back</p>
      </div>

      <div className="form">
        <h1>Edit #XM9141</h1>
        <h3>Bill From</h3>
        <div className="form__bill-from">
          <label className="form__item-1">
            Street Address
            <input type="text" />
          </label>
          <label className="form__item-2">
            City
            <input type="text" />
          </label>
          <label className="form__item-3">
            Zip Code
            <input type="text" />
          </label>
          <label className="form__item-4">
            Country
            <input type="text" />
          </label>
        </div>

        <h3>Bill To</h3>
        <div className="form__bill-to">
          <label className="form__item-1">
            Client's Name
            <input type="text" />
          </label>
          <label className="form__item-2">
            Client's Email
            <input type="text" />
          </label>
          <label className="form__item-3">
            Street Address
            <input type="text" />
          </label>
          <label className="form__item-4">
            City
            <input type="text" />
          </label>
          <label className="form__item-5">
            Zip Code
            <input type="text" />
          </label>
          <label className="form__item-6">
            Country
            <input type="text" />
          </label>
          <label className="form__item-7">
            Invoice Date
            <input type="date" />
          </label>
          <label className="form__item-8">
            Payment Terms
            <select>
              <option>Net 30 Days</option>
            </select>
          </label>

          <label className="form__item-9">
            Project Description
            <input type="text" placeholder="Test" />
          </label>
        </div>

        <h2>Item List</h2>
        <div className="form__item-list">
          <label className="form__item-1">
            Item Name
            <input type="text" placeholder="Test" />
          </label>
          <label className="form__item-2">
            Qty.
            <input type="text" placeholder="Test" />
          </label>
          <label className="form__item-3">
            Price
            <input type="text" placeholder="Test" />
          </label>
          <label className="form__item-4">
            Total
            <input type="text" placeholder="Test" />
          </label>
          <label className="form__item-5">
          <img
            src="/assets/icon-delete.svg"
            img="delete"
          />
          </label>
        </div>
        <Button className="secondary">+Add New Item</Button>
      </div>
      <div className="action-buttons">
        <Button className="secondary">Cancel</Button>
        <Button className="primary">Save Changes</Button>
      </div>
    </div>
  );
};

export default EditForm;
