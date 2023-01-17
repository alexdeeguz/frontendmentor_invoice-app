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
  const [filters, setFilters] = useState({
    pending: true,
    paid: true,
    draft: true,
    open: true,
  });
  const { darkMode } = useContext(ThemeContext);
  const darkModeActiveText = darkMode ? "text--dark" : null;
  const darkModeActiveBg = darkMode ? "bg--dark" : null;
  useEffect(() => {
    getInvoices().then((res) => {
      setInvoices(res.data.filter((el) => filters[el.status] === true));
    });
  }, [filters]);

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
      <Drawer formType="new" invoices={invoices} setInvoices={setInvoices} />
      <div className={`invoices ${darkModeActiveText}`}>
        <InvoiceHeader
          handleClickNew={handleClickNew}
          invoices={invoices}
          setFilters={setFilters}
          filters={filters}
          darkMode={darkMode}
        />

        {invoices.length ? (
          <div className="invoices__main">
            {invoices?.map((invoice) => (
              <InvoiceCard
                key={invoice._id}
                darkMode={darkMode}
                invoice={invoice}
                darkModeActiveText={darkModeActiveText}
                darkModeActiveBg={darkModeActiveBg}
              />
            ))}
          </div>
        ) : (
          <div className="invoices__empty">
            <img src="/assets/illustration-empty.svg" />
            <h1>There is nothing here</h1>
            <p>Create an invoice by clicking the New button and get started</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Invoices;
