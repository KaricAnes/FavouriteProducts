import React from "react";
//import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ProductItem.css";
//import { toggleFav } from "../../store/actions/products";

const ProductItem = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="product-item">
        <h2 className={props.isFav ? "is-fav" : ""}>{props.title}</h2>
        <p>{props.description}</p>
        <button
          className={!props.isFav ? "button-outline" : ""}
          onClick={() => props.toggleFavHandler(props.id)}
        >
          {props.isFav ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
