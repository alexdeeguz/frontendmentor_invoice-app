import InvoiceForm from "../../forms/InvoiceForm";
import Modal from "../Modal";
import useWindowSize from "../../../hooks/useWindowSize";
import Button from "./Button";

const Drawer = ({ formType }) => {
  const { width } = useWindowSize()
  if (width < 768) return null

    const buttonActions = () => {
      return formType === "edit" ? (
        <div className="btn-actions" id="btn-actions">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          >

          <Button title="Cancel" backgroundColor="#F9FAFE" color="#7E88C3" />
          <Button title="Save Changes" />
          </div>
        </div>
      ) : (
        <div className="btn-actions" id="btn-actions">
          <div
            style={{ display: "flex", justifyContent: "space-between" }}
          ></div>
          <Button title="Discard" backgroundColor="#F9FAFE" color="#7E88C3" />
          <Button title="Save & Send" />
          <Button
            title="Save as Draft"
            backgroundColor="#373B53"
            color="#888EB0"
          />
        </div>
      );
    };

    console.log(buttonActions())
  return (
    <div className="drawer-container">
      <Modal />
      <div className="drawer-content-container">
        <InvoiceForm formType={formType} />
      </div>
    </div>
  );
};

export default Drawer;
