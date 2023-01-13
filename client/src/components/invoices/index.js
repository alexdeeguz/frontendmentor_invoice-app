import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInvoices } from "../../actions.js/invoices";

import Drawer from "../details/drawer/Drawer";
import Overlay from "../details/drawer/Overlay";
import "./invoices.css";
import InvoiceCard from "./partials/InvoiceCard";

const Invoices = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices()
      .then((res) => setInvoices(res.data));
  }, []);

  const handleClickNew = (e) => {
    e.preventDefault();

    if (e.currentTarget.className.includes("desktop")) {
      document.getElementById("drawer").style.transform = "translateX(0)";
      document.getElementById("overlay").style.display = "block";
    } else {
      navigate("/invoices/new");
    }
  };
  
  return (
    <div>
      <Overlay />
      <Drawer formType="new" />
      <div className="invoices">
        <div className="invoices__header">
          <div className="invoices__header--left">
            <h1>Invoices</h1>
            <p>7 invoices</p>
          </div>

          <div className="invoices__header--right">
            <div className="filter__button">
              <p>Filter</p>
              <img src="/assets/icon-arrow-down.svg" alt="down arrow" />
            </div>
            <div
              className="new__button new__button--desktop"
              onClick={handleClickNew}
            >
              <img src="/assets/icon-plus.svg" alt="plus icon" />
              <p>New</p>
            </div>
            <div
              className="new__button new__button--mobile"
              onClick={handleClickNew}
            >
              <img src="/assets/icon-plus.svg" alt="plus icon" />
              <p>New</p>
            </div>
          </div>
        </div>

        <div className="invoices__main">
          {
            invoices.map(invoice => (
              <InvoiceCard key={invoice._id} invoice={invoice}/>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Invoices;
