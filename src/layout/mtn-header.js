import React from "react";
import logo from "../assets/logo.webp";
import icon from "../assets/search-interface-symbol.png";

function Header() {
  return (
    <>
      <nav className="menu">
        <div className="menu-links">
          <a href="#">Personal</a>
          <a href="#">Business</a>
          <a href="#">Digital</a>
          <a href="#">MoMo</a>
          <a href="#">About</a>
        </div>
        <div className="menu-link-bar">
          <div className="img">
            <img src={logo} alt="logo" />
          </div>
          <div className="links">
            <div className="dropdown">
              <a href="#">Devices</a>
              <div className="dropdown-content">
                <a href="#">Phones</a>
                <a href="#">Tablets</a>
                <a href="#">Accessories</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#">Voice&Data</a>
              <div className="dropdown-content">
                <a href="#">Data Plans</a>
                <a href="#">Call Plans</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#">Apps</a>
              <div className="dropdown-content">
                <a href="#">MyApp</a>
                <a href="#">Entertainment Apps</a>
              </div>
            </div>
            <div className="dropdown">
              <a href="#">Support</a>
              <div className="dropdown-content">
                <a href="#">FAQ</a>
                <a href="#">Contact Support</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <header className="header">
        <div className="head">
          <a href="#" className="home">Home</a>
          <span>&rarr;</span>
          <a href="#">Help</a>
        </div>
        <div className="searcher">
          <div className="input">
            <input
              type="text"
              placeholder="Search our help & Support resource for assistance ...."
            />
          </div>
          <div className="s-icon">
            <img src={icon} alt="search" />
          </div>
        </div>
        <div className="par">
          <p>
            Browse by topic to find step-by-step instructions and guides to help
            you.
          </p>
        </div>
      </header>
    </>
  );
}
export default Header;
