import Button from "../../common/buttons/Button";

const MobileActionButtons = ({ invoice, handleClickDelete, handleClickEdit, darkModeBg, handleClickMarkAsPaid }) => {
  const { status } = invoice
  return (
    <div id={darkModeBg} className={`details__action-buttons--mobile`}>
      {status !== "paid" && <Button className="secondary mobile" onClick={handleClickEdit}>
        Edit
      </Button>}
      <Button className="danger" onClick={handleClickDelete}>
        Delete
      </Button>
      {status !== "paid" && <Button className="primary" onClick={handleClickMarkAsPaid}>Mark as Paid</Button>}
    </div>
  );
};

export default MobileActionButtons;
