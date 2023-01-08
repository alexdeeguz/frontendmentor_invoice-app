import "./nav.css"

const Nav = () => {
    return (
        <nav>
            <div className="logo">
                <img className="logo__img" src="assets/logo.svg" alt="logo"/>
                <div className="logo--secondary"></div>
            </div>
            <div className="nav__content">
                <div className="nav__content--img-container">
                    <img src="assets/icon-moon.svg"/>
                </div>
                <div className="divider"></div>
                <div className="nav__content--img-container">
                    <img src="assets/image-avatar.jpg" />
                </div>
            </div>
        </nav>
    )
}

export default Nav