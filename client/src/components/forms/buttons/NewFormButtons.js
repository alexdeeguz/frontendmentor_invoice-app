import Button from "../../common/Button";

const NewFormButtons = () => {
  return (
    <div className="action-buttons action-buttons--new">
      <Button className="secondary">Discard</Button>
      <div>
        <Button className="dark">Save as Draft</Button>
        <Button className="primary">Save & Send</Button>
      </div>
    </div>
  );
};

export default NewFormButtons;
