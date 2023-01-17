import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import Button from "../buttons/Button";
import EditForm from "../../forms/EditForm";
import NewForm from "../../forms/NewForm";

const Drawer = ({ formType, invoices, setInvoices, invoice, setInvoice, fetchData }) => {
  const handleCancel = () => {
    document.getElementById("body").style.overflow = "auto";
    document.getElementById("drawer").style.transform = "translateX(-150%)";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay--delete").style.display =
    document.getElementById("overlay--delete") ? "none" : null;
    document.getElementById("modal").style.display = "none";
    // fetchData()
  };

  const Form = () => {
    const { darkMode } = useContext(ThemeContext);
    const darkModeBg = darkMode ? "bg--xdark" : null;
    const darkModeInput = darkMode ? "xdark" : null;
    return formType === "edit" ? (
      <>
        <EditForm
          darkModeBg={darkModeBg}
          darkModeInput={darkModeInput}
          handleCancel={handleCancel}
          invoices={invoices}
          setInvoices={setInvoices}
          invoice={invoice}
          setInvoice={setInvoice}
        />
        {/* <div className={`action-buttons ${darkModeInput}`}>
          <Button className="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button className="primary">Save Changes</Button>
        </div> */}
      </>
    ) : (
      <>
        <NewForm
          darkModeBg={darkModeBg}
          darkModeInput={darkModeInput}
          handleCancel={handleCancel}
          invoices={invoices}
          setInvoices={setInvoices}
        />
        {/* <div className={`action-buttons action-buttons--new ${darkModeInput}`}>
          <Button className="secondary" onClick={handleCancel}>
            Discard
          </Button>
          <div>
            <Button className="dark">Save as Draft</Button>
            <Button className="primary">Save & Send</Button>
          </div>
        </div> */}
      </>
    );
  };
  return (
    <div id="drawer" className="drawer">
      <Form />
    </div>
  );
};

export default Drawer;
