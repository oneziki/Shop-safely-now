import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsContext } from "../../Global/ProductsContext";
import "./ProductDetails.css";
import InnerImageZoom from "react-inner-image-zoom";

import { CartContext } from "../../Global/CartsContext";
import currencyFormatter from "currency-formatter";
const ProductDetails = () => {
  const { detailId } = useParams();
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);
  const [productDetail, setProductDetail] = useState([]);
  const { name, price, details, image } = productDetail;
  useEffect(() => {
    const selectedProduct = products.find((product) => product.id == detailId);
    setProductDetail(selectedProduct);
  }, [detailId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 left-side">
          <h2>{name}</h2>
          <p>{details}</p>
          <h2>
            {" "}
            {currencyFormatter.format(price, {
              code: "USD",
            })}
          </h2>
    

          <button
            className="btn btn-success"
            on
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                id: productDetail.id,
                products: products,
              })
            }
          >
            Add Cart
          </button>
          <br />
          <br />

          <img src={image} alt="" />
        </div>

        <div className="col-md-6 img-style">
          <InnerImageZoom src={image} zoomSrc={image} />
          {/*  <img src={image} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
