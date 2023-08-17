import React from "react";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { clearCart, lessQty, remove, update } from "./redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(remove(item));
  };

  const handleLess = (item) => {
    dispatch(lessQty(item));
  };

  const handleAdd = (item) => {
    dispatch(update(item));
  };

  const clearItems = () => {
    dispatch(clearCart());
  };

  return (
    <div className="cart">
      <Link to="/" className="backBtn">
        <i className="fa-solid fa-arrow-left"></i>
        Go to Shopping
      </Link>

      {cartItems.length > 0 ? (
        <>
          <div className="cart-headder">
            <h3 className="cartTitle">Your Cart </h3>
            <hr />
            <br />
          </div>

          <div className="cart-items">
            {cartItems.map((item) => (
              <>
                <div className="cart-item-box" key={item.p.id}>
                  <img src={item.p.image} alt="" className="cart-img" />
                  <div className="cib-details">
                    <h2 className="cartItemTitle">{item.p.title}</h2>
                    <h5>
                      <b>Rating : </b>
                      {item.p.rating.rate}/5
                    </h5>
                    <h5>
                      <b>Quantity : </b>
                      <button
                        className="qtyBtn"
                        onClick={() => handleLess(item)}
                      >
                        -
                      </button>{" "}
                      {item.itemQuantity}{" "}
                      <button
                        className="qtyBtn"
                        onClick={() => handleAdd(item)}
                      >
                        +
                      </button>
                    </h5>
                    <h5>
                      <b>Price : $</b>
                      {Math.ceil(item.p.price * item.itemQuantity)}
                    </h5>
                    <button className="buy-button">Buy</button>
                    <button
                      className="del-button"
                      onClick={() => handleRemove(item)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              </>
            ))}
          </div>

          <hr />

          <div className="cart-bottom">
            <p className="clearBtn" onClick={clearItems}>
              Clear Cart
            </p>
          </div>
        </>
      ) : (
        <>
          <h3 className="emptyTitle" style={{ textAlign: "center" }}>
            Your Cart is Empty..
          </h3>
        </>
      )}
    </div>
  );
};

export default Cart;
