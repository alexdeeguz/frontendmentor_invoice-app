import EditForm from "../../forms/EditForm";

const Drawer = () => {
  return (
    <div id="drawer" className="drawer">
      <EditForm />
      <div className="action-buttons">
        <button className="btn">Cancel</button>
        <button className="btn">Save Changes</button>
      </div>
    </div>
  );
};

export default Drawer;
