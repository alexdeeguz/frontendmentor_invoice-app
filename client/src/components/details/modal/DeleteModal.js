import Button from "../../common/Button";

const DeleteModal = () => {
  return (
    <div id="modal" className="modal">
      <h1>Confirm Deletion</h1>
      <p>
        Are you sure you want to delete invoice #XM9141? This action cannot be
        undone.
      </p>
      <div className="action-buttons">
        <Button className="secondary">Cancel</Button>
        <Button className="danger">Delete</Button>
      </div>
    </div>
  );
};

export default DeleteModal;
