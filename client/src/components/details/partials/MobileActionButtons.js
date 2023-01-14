import Button from "../../common/buttons/Button";

const MobileActionButtons = ({ handleClickDelete, handleClickEdit, darkModeBg }) => {
  return (
    <div id="action-buttons-mobile" className="details__action-buttons--mobile" id="dark">
      <Button className="secondary mobile" onClick={handleClickEdit}>
        Edit
      </Button>
      <Button className="danger" onClick={handleClickDelete}>
        Delete
      </Button>
      <Button className="primary">Mark as Paid</Button>
    </div>
  );
};

export default MobileActionButtons;
