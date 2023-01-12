import { useNavigate } from "react-router-dom";
import Drawer from "../details/drawer/Drawer";
import Overlay from "../details/drawer/Overlay";
import "./invoices.css";

const Invoices = () => {
  const navigate = useNavigate()
  const handleClickNew = (e) => {
    e.preventDefault();
    
    if (e.currentTarget.className.includes("desktop")) {
      document.getElementById("drawer").style.transform = "translateX(0)";
      document.getElementById("overlay").style.display = "block";
    } else {
      navigate("/invoices/new")
    }
  };
  return (
    <div>
      <Overlay />
      <Drawer />
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
          <div className="invoice__card">
            <p className="invoice__card--item1">#RT3080</p>
            <p className="invoice__card--item2">Due 19 Aug 2021</p>
            <p className="invoice__card--item4">Jenson Huang</p>
            <p className="invoice__card--item3">$1,800.90</p>
            <ul className="invoice__card--item5 tag">
              <div className="invoice__card--item5-bg tag__bg"></div>
              <li>Paid</li>
            </ul>
            <img src="/assets/icon-arrow-right.svg" alt="right arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoices;
