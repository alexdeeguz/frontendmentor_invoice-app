import { useState } from "react";
import { editInvoice } from "../../actions.js/invoices";
import Button from "../common/buttons/Button";
import "./forms.css";

const EditForm = ({
  darkModeBg,
  darkModeInput,
  handleCancel,
  invoice,
  setInvoice,
}) => {

  const [updatedInvoice, setUpdatedInvoice] = useState(invoice);
  if (!invoice) return null;

  const handleChangeEdit = (e, group, keyName) => {
    if (["clientAddress", "senderAddress"].includes(group)) {
      setUpdatedInvoice({
        ...updatedInvoice,
        [group]: {
          ...updatedInvoice[group],
          [keyName]: e.target.value,
        },
      });
    } else {
      setUpdatedInvoice({
        ...updatedInvoice,
        [keyName]: e.target.value,
      });
    }
  };

  const handleItemChange = (e, idx, keyName) => {
    e.preventDefault();
    let newItems = [];
    updatedInvoice.items.forEach((item, itemIdx) => {
      if (itemIdx === idx) {
        newItems.push({
          ...item,
          [keyName]: e.target.value,
          total: Number(item.price) * Number(item.quantity),
        });
      } else {
        newItems.push(item);
      }
    });
    setUpdatedInvoice({
      ...updatedInvoice,
      items: newItems,
    });
  };

  const addNewItem = () => {
    setUpdatedInvoice({
      ...updatedInvoice,
      items: [
        ...updatedInvoice.items,
        {
          name: "",
          price: "",
          quantity: "",
          total: "",
        },
      ],
    });
  };

  const handleClickDeleteItem = (item) => {
    let filtered = updatedInvoice.items.filter((el) => {
      if (
        item.name === el.name &&
        item.quantity === el.quantity &&
        item.price === el.price
      ) {
        return false;
      }
      return true;
    });

    setUpdatedInvoice({
      ...updatedInvoice,
      items: filtered
    });
  };

  const handleClickSave = (e) => {
    e.preventDefault();
    editInvoice(updatedInvoice).then((res) => {
      setInvoice(res.data);
      handleCancel();
    });
  };

    const handleClickSaveAndSend = (e) => {
      e.preventDefault();
      editInvoice({ ...updatedInvoice, status: "pending" }).then((res) => {
        setInvoice(res.data);
        handleCancel();
      });
    };

  return (
    <div className="form-container">
      <div className={`form ${darkModeBg}`}>
        <h1>Edit #XM9141</h1>
        <h2>Bill From</h2>
        <div className="form__bill-from">
          <label className="form__item-1">
            Street Address
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.senderAddress.street || ""}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "street")}
            />
          </label>
          <label className="form__item-2">
            City
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.senderAddress.city || ""}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "city")}
            />
          </label>
          <label className="form__item-3">
            Zip Code
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.senderAddress.zip || ""}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "zip")}
            />
          </label>
          <label className="form__item-4">
            Country
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.senderAddress.country || ""}
              onChange={(e) => handleChangeEdit(e, "senderAddress", "country")}
            />
          </label>
        </div>

        <h2>Bill To</h2>
        <div className="form__bill-to">
          <label className="form__item-1">
            Client's Name
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.clientName || ""}
              onChange={(e) => handleChangeEdit(e, null, "clientName")}
            />
          </label>
          <label className="form__item-2">
            Client's Email
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.clientEmail || ""}
              onChange={(e) => handleChangeEdit(e, null, "clientEmail")}
            />
          </label>
          <label className="form__item-3">
            Street Address
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.clientAddress.street || ""}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "street")}
            />
          </label>
          <label className="form__item-4">
            City
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.clientAddress.city || ""}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "city")}
            />
          </label>
          <label className="form__item-5">
            Zip Code
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.clientAddress.zip || ""}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "zip")}
            />
          </label>
          <label className="form__item-6">
            Country
            <input
              className={darkModeInput}
              type="text"
              value={updatedInvoice?.clientAddress.country || ""}
              onChange={(e) => handleChangeEdit(e, "clientAddress", "country")}
            />
          </label>
          <label className="form__item-7">
            Invoice Date
            <input
              className={darkModeInput}
              type="date"
              value={updatedInvoice?.createdAt?.split("T")[0] || ""}
              onChange={(e) => handleChangeEdit(e, null, "createdAt")}
            />
          </label>
          <label className="form__item-8">
            Payment Terms
            <select
              className={darkModeInput}
              value={updatedInvoice?.paymentTerms || ""}
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
              value={updatedInvoice?.description || ""}
              onChange={(e) => handleChangeEdit(e, null, "description")}
            />
          </label>
        </div>

        <h3>Item List</h3>
        {updatedInvoice?.items.map((item, idx) => (
          <div className="form__item-list" key={idx}>
            <label className="form__item-1">
              Item Name
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                value={updatedInvoice?.items[idx].name || ""}
                onChange={(e) => handleItemChange(e, idx, "name")}
              />
            </label>
            <label className="form__item-2">
              Qty.
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                value={updatedInvoice?.items[idx].quantity || ""}
                onChange={(e) => handleItemChange(e, idx, "quantity")}
              />
            </label>
            <label className="form__item-3">
              Price
              <input
                className={darkModeInput}
                type="text"
                placeholder="Test"
                value={updatedInvoice?.items[idx].price || ""}
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
                value={updatedInvoice?.items[idx].total.toFixed(2) || ""}
              />
            </label>
            <label className="form__item-5">
              <img
                src="/assets/icon-delete.svg"
                alt="delete"
                onClick={() => handleClickDeleteItem(item)}
              />
            </label>
          </div>
        ))}
        <Button className={`secondary ${darkModeInput}`} onClick={addNewItem}>
          +Add New Item
        </Button>
      </div>

      <div className={`action-buttons ${darkModeInput}`}>
        <Button className="secondary" onClick={handleCancel}>
          Cancel
        </Button>
        <div>
          <Button className={invoice?.status === "draft" ? "dark" : "primary"} onClick={handleClickSave}>
            Save Changes
          </Button>
          {invoice?.status === "draft" && (
            <Button className="primary" onClick={handleClickSaveAndSend}>
              Save & Send
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditForm;
