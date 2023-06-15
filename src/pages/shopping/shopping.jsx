import React from "react";
// import { PRODUCTS } from "../../controller/product";
import { PRODUCTS } from "../../product.js";
import Product from "./product.jsx";
import "./shoping.css";
export default function Shopping() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Shop</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}
