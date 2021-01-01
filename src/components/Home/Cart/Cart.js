import React, { useContext } from "react";
import { CartContext } from "../../../Global/CartsContext";
import { BsDash, BsPlus, BsFillTrashFill } from "react-icons/bs";
import "./Cart.css";
const Cart = () => {
  const { shoppingCart, totalPrice, qty, dispatch } = useContext(CartContext);
  //console.log('data loaded', data)
  return (
    <section>
      <h2 className="text-center">cart section</h2>
      <div className="cartContainer">
        <div className=" cartDetails" style={{ marginTop: "100px" }}>
          {shoppingCart.length > 0
            ? shoppingCart.map((cart) => (
                <div className="cart" key={cart.id}>
                  <span className="cartProImage">
                    <img src={cart.image} alt="" />
                  </span>
                  <span className="cartProductName">{cart.name}</span>
                  <span className="cartProductPrice">${cart.price}</span>
                  <span className="inc">
                    <BsPlus />
                  </span>
                  <span className="productQuantity">{cart.qty}</span>
                  <span className="dec">
                    <BsDash />
                  </span>
                  <span className="productTotalPrice">{cart.totalPrice}</span>
                  <span className="deleteCartPro">
                    <BsFillTrashFill />
                  </span>
                </div>
              ))
            : "sorry your cart is empty"}
        </div>
      </div>
    </section>
  );
};

export default Cart;
