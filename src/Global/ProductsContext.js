import React, { createContext, useState, useEffect } from "react";
import Onevoucher from "../images/laptop/product-1.png";
import ImgNetflix from "../images/laptop/product-2.png";
import laptop3 from "../images/laptop/product-3.png";
import phone1 from "../images/phone/phone-1.png";
import phone2 from "../images/phone/phone-2.png";
import phone3 from "../images/phone/phone-3.png";
import shoes1 from "../images/shoes/shoe-1.png";
import shoes2 from "../images/shoes/shoe-2.png";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const token = "8737d39f-3336-3ffd-8e1a-f664b2bb759c";
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.flash-internal.flash-group.com/ecommerceManagement/1.0.0/api/product/",
      {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((res) => res.json())
      .then((json) => setResult(json));
  }, []);

  // console.log();

  // const [products] = useState([]);
  return (
    <ProductsContext.Provider value={{ result }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
