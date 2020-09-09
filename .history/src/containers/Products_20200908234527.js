import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { toggleFav } from "../store/actions/products";

const Products = (props) => {
  const productList = useSelector((state) => state.shop.products.filter((prod)=> {
    return prod
  }));

  const dispatch = useDispatch();

  const toggleFavHandler = (id) => {
    dispatch(toggleFav(id));
  };

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
          toggleFavHandler={toggleFavHandler}
        />
      ))}
    </ul>
  );
};

export default Products;
