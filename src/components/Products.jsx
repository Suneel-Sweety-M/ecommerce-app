import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const Loading = () => {
    return (
      <>
        <div className="loading">
          <h2>
            <div className="lds-facebook">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <br />
            Loading..
          </h2>
        </div>
      </>
    );
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="products-page">
          <div className="products-title">
            <h1>Latest Products</h1>
          </div>

          <div className="filter-btns">
            <div className="filter-btn" onClick={() => setFilter(data)}>
              All
            </div>
            <div
              className="filter-btn"
              onClick={() => filterProduct("men's clothing")}
            >
              Men's clothing
            </div>
            <div
              className="filter-btn"
              onClick={() => filterProduct("women's clothing")}
            >
              Women's clothing
            </div>
            <div
              className="filter-btn"
              onClick={() => filterProduct("jewelery")}
            >
              Jewelery
            </div>
            <div
              className="filter-btn"
              onClick={() => filterProduct("electronics")}
            >
              Electronics
            </div>
          </div>
        </div>
        <div className="products">
          {filter.map((product) => {
            return (
              <>
                <div className="card" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img"
                    width={200}
                    height={250}
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text">
                      Price : ${Math.floor(product.price)}
                    </p>
                    <NavLink to={`/products/${product.id}`} className="buy-btn">
                      Buy Now
                    </NavLink>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </>
    );
  };
  return <>{loading ? <Loading /> : <ShowProducts />}</>;
};

export default Products;
