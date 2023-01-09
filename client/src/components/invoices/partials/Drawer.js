import InvoiceForm from "../../forms/InvoiceForm";
import Modal from "../Modal";

const Drawer = ({ formType }) => {
  return (
    <div className="drawer-container">
      <Modal />
      <InvoiceForm formType={formType} />
    </div>
  );
};

export default Drawer;
