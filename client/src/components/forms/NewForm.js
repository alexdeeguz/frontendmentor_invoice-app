import { useState } from "react";
import Button from "../common/buttons/Button";
import "./forms.css";

const NewForm = ({ darkModeBg, darkModeInput }) => {
  const [formValues, setFormValues] = useState({
    billFrom: {
      address: "",
      city: "",
      zip: "",
      country: "",
    },
    billTo: {
      name: "",
      email: "",
      address: "",
      city: "",
      zip: "",
      country: "",
      invoiceDate: "",
      paymentTerms: "",
      description: "",
    },
  });

  const [items, setItems] = useState([]);

  const handleChange = (e) => {

  };
  return (
    <div className="form-container desktop">
      {/* <BackButton /> */}

      <div className={`form ${darkModeBg}`}>
        <h1 className="">New Invoice</h1>
        <h3>Bill From</h3>
        <div className="form__bill-from">
          <label className="form__item-1">
            Street Address
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-2">
            City
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-3">
            Zip Code
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-4">
            Country
            <input className={darkModeInput} type="text" />
          </label>
        </div>

        <h3>Bill To</h3>
        <div className="form__bill-to">
          <label className="form__item-1">
            Client's Name
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-2">
            Client's Email
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-3">
            Street Address
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-4">
            City
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-5">
            Zip Code
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-6">
            Country
            <input className={darkModeInput} type="text" />
          </label>
          <label className="form__item-7">
            Invoice Date
            <input className={darkModeInput} type="date" />
          </label>
          <label className="form__item-8">
            Payment Terms
            <select className={darkModeInput}>
              <option>Net 30 Days</option>
            </select>
          </label>

          <label className="form__item-9">
            Project Description
            <input className={darkModeInput} type="text" placeholder="Test" />
          </label>
        </div>

        <h2>Item List</h2>
        <div className="form__item-list">
          <label className="form__item-1">
            Item Name
            <input className={darkModeInput} type="text" placeholder="Test" />
          </label>
          <label className="form__item-2">
            Qty.
            <input className={darkModeInput} type="text" placeholder="Test" />
          </label>
          <label className="form__item-3">
            Price
            <input className={darkModeInput} type="text" placeholder="Test" />
          </label>
          <label className="form__item-4">
            Total
            <input className={darkModeInput} type="text" placeholder="Test" />
          </label>
          <label className="form__item-5">
            <img src="/assets/icon-delete.svg" img="delete" />
          </label>
        </div>
        <Button className={`secondary ${darkModeInput}`}>+Add New Item</Button>
      </div>
    </div>
  );
};

export default NewForm;
