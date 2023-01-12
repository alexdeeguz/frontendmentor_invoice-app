import Button from "../../common/Button";
import EditForm from "../../forms/EditForm";
import NewForm from "../../forms/NewForm";

const Drawer = () => {
  return (
    <div id="drawer" className="drawer">
      {/* EDIT INVOICE */}
      {/* <EditForm />
      <div className="action-buttons">
        <Button color="secondary">Cancel</Button>
        <Button color="primary">Save Changes</Button>
      </div> */}


    {/* NEW INVOICE */}
    <NewForm />
      <div className="action-buttons action-buttons--new">
        <Button color="secondary">Discard</Button>
        <div>
          <Button color="dark">Save as Draft</Button>
          <Button color="primary">Save & Send</Button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
