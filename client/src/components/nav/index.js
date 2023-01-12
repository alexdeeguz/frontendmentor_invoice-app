import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="logo__bottom"></div>
      </div>
      <div className="nav__right">
        <div className="nav__icon">

        <img src="/assets/icon-moon.svg" alt="theme icon" />
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
