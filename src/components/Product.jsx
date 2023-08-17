import React, { useState, useEffect } from "react";
import { NavLink, useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { update } from "./redux/cartSlice";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const dispatch = useDispatch();

    const handleATC =(p)=>{
      dispatch(update({p}));
    }

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
      <Link to="/" className="backBtn">
        <i className="fa-solid fa-arrow-left"></i>
         Go to Shopping
      </Link>

        <div className="col-md-6" key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h2 className="display-5">{product.title}</h2>
          <p className="lead fw-bolder">
            Rating {product.rating && product.rating.rate}
            <i className="fa fa-star"></i>
          </p>
          <h3 className="display-6 fw-bold my-4">${product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={()=>handleATC(product)}
          >
            Add to Cart
          </button>
          <NavLink
            to="/cart"
            className="btn btn-dark ms-2 px-4 py-2"
          >
            Go to Cart
          </NavLink>
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
