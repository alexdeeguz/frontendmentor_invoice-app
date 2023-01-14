import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import "./nav.css";

const Nav = () => {
  const navigate = useNavigate();
  const { setDarkMode, darkMode } = useContext(ThemeContext);
  const navigateHome = () => {
    navigate("/");
  };
  
  return (
    <nav id="nav">
      <div className="logo" onClick={navigateHome}>
        <img src="/assets/logo.svg" alt="logo" />
        <div className="logo__bottom"></div>
      </div>
      <div className="nav__right">
        <div
          className="nav__icon"
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <img src="/assets/icon-sun.svg" alt="theme icon" />
          ) : (
            <img src="/assets/icon-moon.svg" alt="theme icon" />
          )}
        </div>
        <div className="nav__divider"></div>
        <div className="nav__icon">
          <img src="/assets/image-avatar.jpg" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
