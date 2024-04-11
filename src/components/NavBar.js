import React, { useState } from "react";
import "../core_ui/NavBar.css";
import Login from "./Login";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-top">
          <div className="section">
            <a href="#courses">
              <img
                src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/Upskil+logo+cropped.jpeg"
                alt="logo"
              />
            </a>
          </div>
          <div className="section">
            <input
              type="checkbox"
              id="menu-toggle"
              className="menu-toggle"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <label htmlFor="menu-toggle" className="menu-icon">
              {menuOpen ? "✕" : "☰"}
            </label>
            <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
              <li className="nav-link">
                <a href="https://courses.upskil.work/s/store">Courses</a>
              </li>
              <li className="nav-link">
                <a href="https://courses.upskil.work/blog">Blog</a>
              </li>
              <li className="nav-link">
                <a href="https://courses.upskil.work/aboutus">About</a>
              </li>
              <li className="nav-link">
                <a href="https://courses.upskil.work/products#nav_bar">
                  Digital Products
                </a>
              </li>
              <li className="nav-link">
                <a
                  className="desktop-icon"
                  href="https://courses.upskil.work/s/store"
                >
                  <img
                    className="shopping-cart"
                    src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/shopping_cart_icon.png"
                    alt=""
                  />
                </a>
                <a
                  className="mobile-icon"
                  href="https://courses.upskil.work/s/store"
                >
                  <img
                    className="shopping-cart"
                    src="https://upskilwebpagebucket.s3.ap-south-1.amazonaws.com/shopping_cart_icon.png"
                    alt=""
                  />
                  Cart
                </a>
              </li>
              {/* <li className="nav-link">
                <button className="btn nav-btn" onClick={toggleModal}>Login</button>
              </li> */}
              <li className="nav-link">
                <a className="btn nav-btn" href="https://courses.upskil.work/contactus">Support</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {showModal && <Login toggleModal={toggleModal}/>}
    </>
  );
};

export default NavBar;
