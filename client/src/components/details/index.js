import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { getDetails } from "../../actions.js/invoices";

import Drawer from "../common/drawer/Drawer";
import Overlay from "../common/drawer/Overlay";
import MainContent from "./main/MainContent";
import DeleteModal from "./modal/DeleteModal";
import MobileActionButtons from "./partials/MobileActionButtons";
import ReactLoading from "react-loading";
import "./details.css";
import { ThemeContext } from "../../context/ThemeContext";

const Details = () => {
  const params = useParams();
  const { darkMode } = useContext(ThemeContext);
  const [invoice, setInvoice] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setLoading(true);
    getDetails(params.id).then((res) => {
      setInvoice(res.data);
      setLoading(false);
    });
  };

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

  if (loading)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <ReactLoading type="bubbles" color="#7C5DFA" width={100} height={100} />
      </div>
    );

  return (
    <div>
      <DeleteModal invoice={invoice} />
      <Overlay />
      <Drawer
        formType="edit"
        invoice={invoice}
        setInvoice={setInvoice}
        fetchData={fetchData}
      />
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
