import React, { useState, useEffect } from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "./redux/cartSlice";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

  const handleATC = (p) => {
    dispatch(update({ p }));
  };

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
    };
    getProduct();
  });

  const ShowProduct = () => {
    return (
      <>
        <br />
        <Link to="/" className="backBtn">
          <i className="fa-solid fa-arrow-left"></i>
        </Link>

        <div className="product-view">
          <div className="product-img" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              height="400px"
              width="400px"
            />
          </div>
          <div className="product-details">
            <h4 className="product-cate">{product.category}</h4>
            <h2 className="product-title">{product.title}</h2>
            <p className="product-rating">
              Rating : {product.rating && product.rating.rate} / 5
            </p>
            <p className="product-price">Price : ${product.price}</p>
            <p className="product-desc">{product.description}</p>
            <button className="btn add-btn" onClick={() => handleATC(product)}>
              Add to Cart
            </button>
            <NavLink to="/cart" className="btn cart-btn">
              Go to Cart
            </NavLink>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          <ShowProduct />
        </div>
      </div>
    </div>
  );
};

export default Product;
