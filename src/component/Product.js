import React from "react";
import ProductDetail from "../component/ProductDetail";

const Product = props => {
  return (
    <span>
      <ProductDetail
        product_image={props.product.product_image}
        title={props.product.title}
        price={props.product.price}
      />
    </span>
  );
};

export default Product;
