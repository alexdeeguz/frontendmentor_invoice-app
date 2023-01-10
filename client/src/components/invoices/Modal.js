import { createPortal } from "react-dom";
const OVERLAY_STYLE = {
  width: "100vw",
  height: "100%",
  backgroundColor: "rgba(0,0,0,.7)",
  position: "absolute",
  zIndex: 0,
  display: "none",
};

const Modal = () => {
  const handleClose = (e) => {
    window.scrollTo(0, 0);
    e.target.style.display = "none";
    setTimeout(() => {
      document.getElementById("invoice-form").style.transform =
        "translateX(-100%)";
      // document.getElementById("invoice-form").style.display =
      //   "none";
    }, 0);
    setTimeout(() => {
      document.getElementById("invoice-form").style.display = "none";
    }, 500);
  };
  return <div style={OVERLAY_STYLE} id="modal" onClick={handleClose}></div>;
};

export default Modal;
