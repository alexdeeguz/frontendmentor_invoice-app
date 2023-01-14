import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getInvoices } from "../../actions.js/invoices";

import Drawer from "../common/drawer/Drawer";
import Overlay from "../common/drawer/Overlay";
import InvoiceCard from "./partials/InvoiceCard";
import InvoiceHeader from "./partials/InvoiceHeader";
import "./invoices.css";

const Invoices = () => {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    getInvoices()
      .then((res) => setInvoices(res.data));
  }, []);

  const handleClickNew = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.getElementById("drawer").style.transform = "translateX(0)";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    // if (e.currentTarget.className.includes("desktop")) {
    //   document.getElementById("drawer").style.transform = "translateX(0)";
    //   document.getElementById("overlay").style.display = "block";
    // } else {
    //   navigate("/invoices/new");
    // }
  };
  
  return (
    <div>
      <Overlay />
      <Drawer formType="new" />
      <div className="invoices">
        <InvoiceHeader handleClickNew={handleClickNew} />

        <div className="invoices__main">
          {invoices.map((invoice) => (
            <InvoiceCard key={invoice._id} invoice={invoice} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
