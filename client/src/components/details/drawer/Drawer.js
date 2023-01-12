import EditForm from "../../forms/EditForm";
import NewForm from "../../forms/NewForm";

const Drawer = () => {
  return (
    <div id="drawer" className="drawer">
      {/* EDIT INVOICE */}
      {/* <EditForm />
      <div className="action-buttons">
        <button className="btn">Cancel</button>
        <button className="btn">Save Changes</button>
      </div> */}


    {/* NEW INVOICE */}
    <NewForm />
      <div className="action-buttons action-buttons--new">
        <button className="btn">Discard</button>
        <div>
          <button className="btn">Save as Draft</button>
          <button className="btn">Save & Send</button>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
