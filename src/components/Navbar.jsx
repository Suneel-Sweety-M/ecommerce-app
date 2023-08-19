import React, { useEffect, useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  });

  const MobileNav = () => {
    return (
      <>
        <nav className="mobile-nav">
          <div className="mob-nav">
            <NavLink className="navbar-logo" to="/">
              <i className="fa-solid fa-cart-shopping"></i> Emart
            </NavLink>
            <div className="mobile-search-bar">
              <input type="text" placeholder="Search products" />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <hr />

          <div className="mobile-nav-links">
            <div className="buttons">
              <NavLink to="/login" className="nav-btn">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="nav-btn">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="nav-btn">
                <i className="fa fa-shopping-cart me-1"></i> Cart ({cart.length}
                )
              </NavLink>
            </div>
          </div>
        </nav>
      </>
    );
  };

  const MainNav = () => {
    return (
      <>
        <nav className="navbar">
          <div className="container">
            <NavLink className="navbar-logo" to="/">
              <i className="fa-solid fa-cart-shopping"></i> Emart
            </NavLink>

            <div className="search-bar">
              <input
                type="text"
                placeholder="Search products and brands you want."
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className="navbar-links" id="navbarSupportedContent">
              <div className="buttons">
                <NavLink to="/login" className="nav-btn">
                  <i className="fa fa-sign-in me-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="nav-btn">
                  <i className="fa fa-user-plus me-1"></i> Register
                </NavLink>
                <NavLink to="/cart" className="nav-btn">
                  <i className="fa fa-shopping-cart me-1"></i> Cart (
                  {cart.length})
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  };

  return <>{open ? <MobileNav /> : <MainNav />}</>;
};

export default Navbar;
