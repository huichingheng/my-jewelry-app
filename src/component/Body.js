import React, { Component } from "react";
import { products } from "../utils/seedData";
import Product from "./Product";
import Sidebar from "./Sidebar";
import "../style/Body.css";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      products: products
    };
  }

  render() {
    return (
      <div className="body-container">
        <Sidebar />
        <span className="product-container">
          {this.state.products.map((product, i) => {
            return <Product key={i} product={product} />;
          })}
        </span>
      </div>
    );
  }
}

export default Body;
