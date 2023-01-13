import Button from "../../common/Button";
import EditForm from "../../forms/EditForm";
import NewForm from "../../forms/NewForm";

const Drawer = ({ formType }) => {
  const handleCancel = (e) => {
    e.preventDefault();
    document.getElementById("drawer").style.transform = "translateX(-150%)";
    document.getElementById("overlay").style.display = "none";
    document.getElementById("overlay--delete").style.display = "none";
    document.getElementById("modal").style.display = "none";
  };

  const Form = () => {
    return formType === "edit" ? (
      <>
        <EditForm />
        <div className="action-buttons">
          <Button className="secondary" onClick={handleCancel}>Cancel</Button>
          <Button className="primary">Save Changes</Button>
        </div>
      </>
    ) : (
      <>
        <NewForm />
        <div className="action-buttons action-buttons--new">
          <Button className="secondary" onClick={handleCancel}>Discard</Button>
          <div>
            <Button className="dark">Save as Draft</Button>
            <Button className="primary">Save & Send</Button>
          </div>
        </div>
      </>
    );
  };
  return (
    <div id="drawer" className="drawer">
      <Form />
    </div>
  );
};

export default Drawer;
