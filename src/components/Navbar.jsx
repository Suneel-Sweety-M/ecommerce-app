import React, { useState } from "react";
import "../App.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cart = useSelector((state) => state.cart.cartItems);

  const MobileNav = () => {
    return (
      <>
        <nav className="mobile-nav">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <i className="fa-solid fa-cart-shopping"></i> Emart
          </NavLink>

          <div className="close" onClick={()=>setOpen(false)}>
            &times;
          </div>

          <div className="mobile-links">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>

            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark me-2">
                <i className="fa fa-sign-in me-1"></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark me-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark me-2">
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
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-white py-3 shadow-sm">
          <div className="container">
            <NavLink className="navbar-brand fw-bold fs-4" to="/">
              <i className="fa-solid fa-cart-shopping"></i> Emart
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={()=>setOpen(true)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <div className="buttons">
                <NavLink to="/login" className="btn btn-outline-dark me-2">
                  <i className="fa fa-sign-in me-1"></i> Login
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark me-2">
                  <i className="fa fa-user-plus me-1"></i> Register
                </NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark me-2">
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
