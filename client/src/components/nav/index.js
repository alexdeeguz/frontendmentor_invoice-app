import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <img src="/assets/logo.svg" alt="logo" />
        <div className="logo__bottom"></div>
      </div>
      <div className="nav__right">
        <img src="/assets/icon-moon.svg" alt="theme icon" />
        <div className="nav__divider"></div>
        <img src="/assets/image-avatar.jpg" />
      </div>
    </nav>
  );
};

export default Nav;
