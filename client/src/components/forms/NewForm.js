import { useState } from "react";
import { createInvoice } from "../../actions.js/invoices";
import Button from "../common/buttons/Button";
import "./forms.css";

const NewForm = ({
  darkModeBg,
  darkModeInput,
  handleCancel,
  setInvoices,
  invoices
}) => {

  const [newInvoice, setNewInvoice] = useState({
    clientAddress: {
      city: "",
      street: "",
      zip: "",
      country: "",
    },
    senderAddress: {
      city: "",
      street: "",
      zip: "",
      country: "",
    },
    description: "",
    clientName: "",
    clientEmail: "",
    createdAt: "",
    paymentTerms: 15,
    items: [{
      name: "",
      quantity: "",
      price: "",
      total: 0
    }]
  });

  // if (!invoice) return null;

  const handleChangeEdit = (e, group, keyName) => {
    if (["clientAddress", "senderAddress"].includes(group)) {
      setNewInvoice({
        ...newInvoice,
        [group]: {
          ...newInvoice[group],
          [keyName]: e.target.value,
        },
      });
    } else {
      setNewInvoice({
        ...newInvoice,
        [keyName]: e.target.value,
      });
    }
  };

  const handleItemChange = (e, idx, keyName) => {
    e.preventDefault();

    let newItems = [];
    newInvoice.items.forEach((item, itemIdx) => {
      if (itemIdx === idx) {
        newItems.push({
          ...item,
          [keyName]: e.target.value,
          total: Number(item.price) * Number(item.quantity) || 0
        });
      } else {
        newItems.push(item);
      }
    });
    setNewInvoice({
      ...newInvoice,
      items: newItems,
    });
  };

  const addNewItem = () => {
    setNewInvoice({
      ...newInvoice,
      items: [
        ...newInvoice.items,
        {
          name: "",
          price: 0,
          quantity: 0,
          total: 0,
        },
      ],
    });
  };

  const handleClickDeleteItem = (item) => {
    let filtered = newInvoice.items.filter((el) => {
      if (
        item.name === el.name &&
        item.quantity === el.quantity &&
        item.price === el.price
      ) {
        return false;
      }
      return true;
    });

    setNewInvoice({
      ...newInvoice,
      items: filtered,
    });
  };

  const handleClickSaveAndSend = (e) => {
    e.preventDefault();
    let total = 0
    newInvoice.items.forEach(item => {
      total += Number(item.price) * Number(item.quantity)
    })

    const paymentDue = new Date(newInvoice.createdAt.split("T")[0].split("-").join("/"))
    paymentDue.setDate(paymentDue.getDate() + Number(newInvoice.paymentTerms))

    createInvoice({...newInvoice, total, paymentDue}).then((res) => {
      setInvoices([...invoices, res.data]);
      handleCancel();
    });
  };

  const handleClickSaveDraft = (e) => {
    e.preventDefault();
    let total = 0;
    newInvoice.items.forEach((item) => {
      total += Number(item.price) * Number(item.quantity);
    });

    const paymentDue = new Date(
      newInvoice.createdAt.split("T")[0].split("-").join("/")
    );
    paymentDue.setDate(paymentDue.getDate() + Number(newInvoice.paymentTerms));

    createInvoice({ ...newInvoice, total, paymentDue, status: "draft" }).then((res) => {
      setInvoices([...invoices, res.data]);
      handleCancel();
    });
  }

  return (
    <div className="form-container">
      <div className={`form ${darkModeBg}`}>
        <h1>New Invoice</h1>
        <h3>Bill From</h3>
        <div className="form__bill-from">
          <label className="form__item-1">
            Street Address
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.senderAddress.street}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "street")}
            />
          </label>
          <label className="form__item-2">
            City
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.senderAddress.city}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "city")}
            />
          </label>
          <label className="form__item-3">
            Zip Code
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.senderAddress.zip}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "zip")}
            />
          </label>
          <label className="form__item-4">
            Country
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.senderAddress.country}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "country")}
            />
          </label>
        </div>

        <h3>Bill To</h3>
        <div className="form__bill-to">
          <label className="form__item-1">
            Client's Name
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.clientName}
              onChange={(e) => handleChangeEdit(e, null, "clientName")}
            />
          </label>
          <label className="form__item-2">
            Client's Email
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.clientEmail}
              onChange={(e) => handleChangeEdit(e, null, "clientEmail")}
            />
          </label>
          <label className="form__item-3">
            Street Address
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.clientAddress.street}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "street")}
            />
          </label>
          <label className="form__item-4">
            City
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.clientAddress.city}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "city")}
            />
          </label>
          <label className="form__item-5">
            Zip Code
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.clientAddress.zip}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "zip")}
            />
          </label>
          <label className="form__item-6">
            Country
            <input
              className={darkModeInput}
              type="text"
              value={newInvoice?.clientAddress.country}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "country")}
            />
          </label>
          <label className="form__item-7">
            Invoice Date
            <input
              className={darkModeInput}
              type="date"
              value={newInvoice?.createdAt}
              onChange={(e) => handleChangeEdit(e, null, "createdAt")}
            />
          </label>
          <label className="form__item-8">
            Payment Terms
            <select
              className={darkModeInput}
              value={newInvoice?.paymentTerms}
              onChange={(e) => handleChangeEdit(e, null, "paymentTerms")}
            >
              <option value={15}>Net 15 Days</option>
              <option value={30}>Net 30 Days</option>
            </select>
          </label>

          <label className="form__item-9">
            Project Description
            <input
              className={darkModeInput}
              type="text"
              placeholder="Test"
              value={newInvoice?.description}
              onChange={(e) => handleChangeEdit(e, null, "description")}
            />
          </label>
        </div>

        <h2>Item List</h2>
        {newInvoice?.items.map((item, idx) => (
          <div className="form__item-list" key={idx}>
            <label className="form__item-1">
              Item Name
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                value={newInvoice?.items[idx].name}
                onChange={(e) => handleItemChange(e, idx, "name")}
              />
            </label>
            <label className="form__item-2">
              Qty.
              <input
                className={darkModeInput}
                type="text"
                placeholder="0"
                value={newInvoice?.items[idx].quantity}
                onChange={(e) => handleItemChange(e, idx, "quantity")}
              />
            </label>
            <label className="form__item-3">
              Price
              <input
                className={darkModeInput}
                type="text"
                placeholder="0"
                value={newInvoice?.items[idx].price}
                onChange={(e) => handleItemChange(e, idx, "price")}
              />
            </label>
            <label className="form__item-4">
              Total
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                readOnly
                value={(newInvoice?.items[idx].price * newInvoice?.items[idx].quantity).toFixed(2)}
              />
            </label>
            <label className="form__item-5">
              <img
                src="/assets/icon-delete.svg"
                img="delete"
                onClick={() => handleClickDeleteItem(item)}
              />
            </label>
          </div>
        ))}
        <Button className={`secondary ${darkModeInput}`} onClick={addNewItem}>
          +Add New Item
        </Button>
      </div>

      <div className={`action-buttons action-buttons--new ${darkModeInput}`}>
        <Button
          className="secondary"
          onClick={() => {
            handleCancel();
            //  setTimeout(() => resetFormValues, 0)
          }}
        >
          Discard
        </Button>
        <div>
          <Button className="dark" onClick={handleClickSaveDraft}>Save as Draft</Button>
          <Button className="primary" onClick={handleClickSaveAndSend}>
            Save & Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
