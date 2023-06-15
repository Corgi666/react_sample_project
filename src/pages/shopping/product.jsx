import React from "react";

export default function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt="" />
      <div className="drescription">
        {" "}
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn"> Add To Cart</button>
    </div>
  );
}
