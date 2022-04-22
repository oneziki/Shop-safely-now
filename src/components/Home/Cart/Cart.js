import React, { useContext } from "react";
import { CartContext } from "../../../Global/CartsContext";
import { BsDash, BsPlus, BsFillTrashFill } from "react-icons/bs";
import currencyFormatter from "currency-formatter";
import "./Cart.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  //console.log('data loaded', data)

  const history = useHistory();
  return (
    <section>
      <h2 className="text-center">cart section</h2>
      <div className="cartContainer">
        <div className=" cartDetails" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-9">
              {shoppingCart.length > 0
                ? shoppingCart.map((cart) => (
                    <div className="cart" key={cart.productCode}>
                      <span className="cartProImage">
                        <img src={cart.image} alt="" />
                        <span className="imageCount">{cart.qty}</span>
                      </span>
                      <span className="cartProductName">{cart.name}</span>
                      <span className="cartProductPrice">
                        {currencyFormatter.format(cart.price, {
                          code: "USD",
                        })}
                      </span>
                      <span
                        className="dec"
                        onClick={() =>
                          dispatch({ type: "DEC", productCode: cart.productCode, cart })
                        }
                      >
                        <BsDash />
                      </span>
                      <span className="productQuantity">{cart.qty}</span>
                      <span
                        className="inc"
                        onClick={() =>
                          dispatch({ type: "INC", productCode: cart.productCode, cart })
                        }
                      >
                        <BsPlus />
                      </span>
                      <span className="productTotalPrice">
                        {currencyFormatter.format(cart.qty * cart.price, {
                          code: "USD",
                        })}
                      </span>
                      <span
                        className="deleteCartPro"
                        onClick={() =>
                          dispatch({ type: "DELETE", productCode: cart.productCode, cart })
                        }
                      >
                        <BsFillTrashFill />
                      </span>
                    </div>
                  ))
                : "sorry your cart is empty"}
            </div>
            <div className="col-3">
              {shoppingCart.length > 0 ? (
                <div className="cart-summary">
                  <div className="summary">
                    <h2>Summary</h2>
                    <div className="row  totalItems">
                      <div className="col-6 items">Total Items</div>
                      <div className="col-6 itemsCount">{qty}.00</div>
                    </div>
                    <div className="row totalPriceSection">
                      <div className="col-6 justTitle">Total Price</div>
                      <div className="col-6 itemsPrice">
                        {currencyFormatter.format(totalPrice, {
                          code: "USD",
                        })}
                      </div>
                    </div>

                    <div>
                      <Button
                        className="col-12 btn btn-primary"
                        onClick={() => history.push("/checkout")}
                      >
                        Checkout
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
