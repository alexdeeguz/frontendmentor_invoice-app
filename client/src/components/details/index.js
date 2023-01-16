import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../actions.js/invoices";

import Drawer from "../common/drawer/Drawer";
import Overlay from "../common/drawer/Overlay";
import MainContent from "./main/MainContent";
import DeleteModal from "./modal/DeleteModal";
import MobileActionButtons from "./partials/MobileActionButtons";
import "./details.css";
import { ThemeContext } from "../../context/ThemeContext";

const Details = () => {
  const params = useParams();
  const { darkMode } = useContext(ThemeContext);
  const [invoice, setInvoice] = useState("");
  useEffect(() => {
    getDetails(params.id).then((res) => {
      setInvoice(res.data);
    });
  }, []);

  const handleClickEdit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    document.getElementById("drawer").style.transform = "translateX(0)";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
  };

  const handleClickDelete = () => {
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
    document.getElementById("overlay--delete").style.display = "block";
  };

  const darkModeBg = darkMode ? "dark" : "";
  const darkModeLightBg = darkMode ? "lightdark" : "";

  return (
    <div>
      <DeleteModal invoice={invoice} />
      <Overlay />
      <Drawer formType="edit" invoice={invoice} setInvoice={setInvoice} />
      <MainContent
        darkMode={darkMode}
        darkModeBg={darkModeBg}
        darkModeLightBg={darkModeLightBg}
        invoice={invoice}
        handleClickEdit={handleClickEdit}
        handleClickDelete={handleClickDelete}
      />
      <MobileActionButtons
        darkModeBg={darkModeBg}
        handleClickDelete={handleClickDelete}
        handleClickEdit={handleClickEdit}
      />
    </div>
  );
};

export default Details;
