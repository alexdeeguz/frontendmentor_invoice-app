
const Overlay = () => {
    const handleClose = (e) => {
        e.preventDefault();
        document.getElementById("drawer").style.transform = "translateX(-150%)"
        document.getElementById("overlay").style.display = "none"
                document.getElementById("modal").style.display = "none";
    }
  return <div onClick={handleClose} id="overlay" className="overlay"></div>;
};

export default Overlay;
