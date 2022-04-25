import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";

import { CartContext } from "../../Global/CartsContext";
import currencyFormatter from "currency-formatter";
const ProductDetails = () => {
  const { dispatch } = useContext(CartContext);
  const params = useParams();
  let productCode = params.productCode; // <-- access `productCode` param
  let vendor = params.vendor; // <-- access `vendor` param
  let value = params.value; // <-- access `value` param
  let productItem = {productCode, value, vendor};

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 left-side">
          <h2>{vendor}</h2>
          <h2>
            {currencyFormatter.format(value, {
              code: "USD",
            })}
          </h2>
    

          <button
            className="btn btn-success"
            on
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                id: productCode,
                products: productItem,
              })
            }
          >
            Add Cart
          </button>
          <br />
          <br />
        </div>

        <div className="col-md-6 img-style">
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
