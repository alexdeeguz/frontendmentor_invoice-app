import { useNavigate } from "react-router-dom";
import { deleteInvoice } from "../../../actions.js/invoices";
import Button from "../../common/buttons/Button";

const DeleteModal = ({ invoice }) => {
  const navigate = useNavigate();
  const handleClickCancel = () => {
    document.getElementById("modal").style.display = "none";
    document.getElementById("overlay--delete").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  };

  const handleClickDelete = () => {
    deleteInvoice(invoice).then(() => {
      navigate("/");
    });
  };
  return (
    <>
      <div id="overlay--delete"></div>
      <div id="modal" className="modal">
        <h1>Confirm Deletion</h1>
        <p>
          Are you sure you want to delete invoice #XM9141? This action cannot be
          undone.
        </p>
        <div className="action-buttons">
          <Button className="secondary" onClick={handleClickCancel}>
            Cancel
          </Button>
          <Button className="danger" onClick={handleClickDelete}>
            Delete
          </Button>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
