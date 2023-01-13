import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getDetails } from "../../actions.js/invoices";

import Drawer from "../common/drawer/Drawer";
import Overlay from "../common/drawer/Overlay";
import MainContent from "./main/MainContent";
import DeleteModal from "./modal/DeleteModal";
import MobileActionButtons from "./partials/MobileActionButtons";
import "./details.css";

const Details = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [invoice, setInvoice] = useState("");
  useEffect(() => {
    getDetails(params.id).then((res) => setInvoice(res.data));
  }, []);

  const handleClickEdit = (e) => {
    e.preventDefault();
    if (e.target.className.includes("mobile")) {
      navigate("/invoices/1/edit");
    } else {
      document.getElementById("drawer").style.transform = "translateX(0)";
      document.getElementById("overlay").style.display = "block";
    }
  };

  const handleClickDelete = () => {
    // document.getElementById("action-buttons-mobile").style.display = "none";
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay--delete").style.display = "block";
  };

  return (
    <div>
      <DeleteModal />
      <Overlay />
      <Drawer formType="edit" />
      <MainContent
        invoice={invoice}
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
      <MobileActionButtons
        handleClickDelete={handleClickDelete}
        handleClickEdit={handleClickEdit}
      />
    </div>
  );
};

export default Details;
