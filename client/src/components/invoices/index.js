import { useEffect, useState, useContext } from "react";
import { getInvoices } from "../../actions.js/invoices";

import Drawer from "../common/drawer/Drawer";
import Overlay from "../common/drawer/Overlay";
import InvoiceCard from "./partials/InvoiceCard";
import InvoiceHeader from "./partials/InvoiceHeader";
import "./invoices.css";
import { ThemeContext } from "../../context/ThemeContext";

const Invoices = () => {
  const [invoices, setInvoices] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const darkModeActiveText = darkMode ? "text--dark" : null
  const darkModeActiveBg = darkMode ? "bg--dark" : null
  useEffect(() => {
    getInvoices().then((res) => setInvoices(res.data));
  }, []);

  const handleClickNew = (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    document.getElementById("drawer").style.transform = "translateX(0)";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
  };

  return (
    <div>
      <Overlay />
      <Drawer formType="new" />
      <div className={`invoices ${darkModeActiveText}`}>
        <InvoiceHeader handleClickNew={handleClickNew} />

        <div className="invoices__main">
          {invoices.map((invoice) => (
            <InvoiceCard key={invoice._id} darkMode={darkMode} invoice={invoice} darkModeActiveText={darkModeActiveText} darkModeActiveBg={darkModeActiveBg}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Invoices;
