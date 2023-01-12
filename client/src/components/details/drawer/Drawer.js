import Button from "../../common/Button";
import EditForm from "../../forms/EditForm";
import NewForm from "../../forms/NewForm";

const Drawer = () => {
  return (
    <div id="drawer" className="drawer">
      {/* EDIT INVOICE */}
      {/* <EditForm />
      <div className="action-buttons">
        <Button className="secondary">Cancel</Button>
        <Button className="primary">Save Changes</Button>
      </div> */}


    {/* NEW INVOICE */}
    <NewForm />
      <div className="action-buttons action-buttons--new">
        <Button className="secondary">Discard</Button>
        <div>
          <Button className="dark">Save as Draft</Button>
          <Button className="primary">Save & Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
