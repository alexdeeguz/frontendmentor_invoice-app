import { useState } from "react";
import { createInvoice } from "../../actions.js/invoices";
import Button from "../common/buttons/Button";
import "./forms.css";

const NewForm = ({ darkModeBg, darkModeInput, handleCancel, setInvoices, invoices }) => {
  const [formValues, setFormValues] = useState({
    billFrom: {
      senderAddress: {
        city: "",
        street: "",
        zip: "",
        country: "",
      },
    },
    billTo: {
      name: "",
      email: "",
      clientAddress: {
        city: "",
        street: "",
        zip: "",
        country: "",
      },
      invoiceDate: "",
      paymentTerms: 15,
      description: "",
    },
  });

  const [items, setItems] = useState([
    {
      name: "",
      price: "",
      quantity: "",
      total: "",
    },
  ]);

  const addNewItem = () => {
    setItems([
      ...items,
      {
        name: "",
        price: "",
        quantity: "",
        total: "",
      },
    ]);
  };

  const handleItemChange = (e, idx, keyName) => {
    e.preventDefault();
    let newItems = [];
    items.forEach((item, itemIdx) => {
      if (itemIdx === idx) {
        newItems.push({
          ...item,
          [keyName]: e.target.value,
          total: Number(item.price) * Number(item.quantity)
        });
      } else {
        newItems.push(item);
      }
    });
    setItems(newItems);
  };

  const handleChangeBillFrom = (e, key) => {
    setFormValues({
      ...formValues,
      billFrom: {
        senderAddress: {
          ...formValues.billFrom.senderAddress,
          [key]: e.target.value,
        },
      },
    });
  };

  const handleChangeBillTo = (e, key) => {
    if (key.includes("clientAddress")) {
      const [_, clientAddressKeyName] = key.split(" ");
      setFormValues({
        ...formValues,
        billTo: {
          ...formValues.billTo,
          clientAddress: {
            ...formValues.billTo.clientAddress,
            [clientAddressKeyName]: e.target.value,
          },
        },
      });
    } else {
      setFormValues({
        ...formValues,
        billTo: {
          ...formValues.billTo,
          [key]: e.target.value,
        },
      });
    }
  };

  const handleClickSaveAndSend = () => {
    const { billFrom: { senderAddress }, billTo: { clientAddress, description, email, invoiceDate, name, paymentTerms } } = formValues
    const createdAt = new Date(invoiceDate.split("-").join("/"))
    const paymentDue = new Date(invoiceDate.split("-").join("/"))
    paymentDue.setDate(paymentDue.getDate() + Number(paymentTerms))

    let total = 0
    items.forEach(item => {
      let itemTotal = (Number(item.quantity) * Number(item.price))
      total += Number(itemTotal)
    })
    const data = {
      createdAt,
      paymentDue, 
      description,
      paymentTerms,
      clientName: name,
      clientEmail: email,
      senderAddress,
      clientAddress,
      items,
      total
    }

    createInvoice(data)
      .then((res) => {
        setInvoices([...invoices, res.data])
        handleCancel()
      })
  }

  return (
    <div className="form-container desktop">
      {/* <BackButton /> */}

      <div className={`form ${darkModeBg}`}>
        <h1 className="">New Invoice</h1>
        <h3>Bill From</h3>
        <div className="form__bill-from">
          <label className="form__item-1">
            Street Address
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillFrom(e, "street")}
            />
          </label>
          <label className="form__item-2">
            City
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillFrom(e, "city")}
            />
          </label>
          <label className="form__item-3">
            Zip Code
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillFrom(e, "zip")}
            />
          </label>
          <label className="form__item-4">
            Country
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillFrom(e, "country")}
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
              onChange={(e) => handleChangeBillTo(e, "name")}
            />
          </label>
          <label className="form__item-2">
            Client's Email
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillTo(e, "email")}
            />
          </label>
          <label className="form__item-3">
            Street Address
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillTo(e, "clientAddress street")}
            />
          </label>
          <label className="form__item-4">
            City
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillTo(e, "clientAddress city")}
            />
          </label>
          <label className="form__item-5">
            Zip Code
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillTo(e, "clientAddress zip")}
            />
          </label>
          <label className="form__item-6">
            Country
            <input
              className={darkModeInput}
              type="text"
              onChange={(e) => handleChangeBillTo(e, "clientAddress country")}
            />
          </label>
          <label className="form__item-7">
            Invoice Date
            <input
              className={darkModeInput}
              type="date"
              onChange={(e) => handleChangeBillTo(e, "invoiceDate")}
              value={formValues.billTo.invoiceDate}
            />
          </label>
          <label className="form__item-8">
            Payment Terms
            <select
              className={darkModeInput}
              onChange={(e) => handleChangeBillTo(e, "paymentTerms")}
              value={formValues.billTo.paymentTerms}
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
              onChange={(e) => handleChangeBillTo(e, "description")}
            />
          </label>
        </div>

        <h2>Item List</h2>
        {items?.map((item, idx) => (
          <div className="form__item-list" key={idx}>
            <label className="form__item-1">
              Item Name
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                onChange={(e) => handleItemChange(e, idx, "name")}
              />
            </label>
            <label className="form__item-2">
              Qty.
              <input
                className={darkModeInput}
                type="number"
                step="1"
                placeholder="Test"
                onChange={(e) => handleItemChange(e, idx, "quantity")}
              />
            </label>
            <label className="form__item-3">
              Price
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                onChange={(e) => handleItemChange(e, idx, "price")}
              />
            </label>
            <label className="form__item-4">
              Total
              <input
                type="text"
                placeholder="Test"
                readOnly
                value={(item.price * item.quantity).toFixed(2) || 0}
              />
            </label>
            <label className="form__item-5">
              <img src="/assets/icon-delete.svg" img="delete" />
            </label>
          </div>
        ))}
        <Button
          id="add"
          className={`secondary ${darkModeInput}`}
          onClick={addNewItem}
        >
          +Add New Item
        </Button>

        <div className={`action-buttons action-buttons--new ${darkModeInput}`}>
          <Button className="secondary" onClick={handleCancel}>
            Discard
          </Button>
          <div>
            <Button className="dark">Save as Draft</Button>
            <Button className="primary" onClick={handleClickSaveAndSend}>
              Save & Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewForm;
