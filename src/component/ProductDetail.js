import React from "react";
import "../style/ProductDetail.css"

const ProductDetail = props => {
  return (
    <div>
      <div className="product-img-holder">
        <img alt="product" className="product-img" src={props.product_image} />
      </div>
      <span className="product-detail-container">
        <h4>{props.title}</h4>
        <p>S$ {props.price}</p>
      </span>
    </div>
  );
};

export default ProductDetail;
