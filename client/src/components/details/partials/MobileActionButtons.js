import Button from "../../common/buttons/Button";

const MobileActionButtons = ({ handleClickDelete, handleClickEdit, darkModeBg }) => {
  console.log(darkModeBg)
  return (
    <div id={darkModeBg} className={`details__action-buttons--mobile`}>
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
