import React, { createContext, useState } from "react";
import laptop1 from "../images/laptop/product-1.png";
import laptop2 from "../images/laptop/product-2.png";
import laptop3 from "../images/laptop/product-3.png";
import phone1 from "../images/phone/phone-1.png";
import phone2 from "../images/phone/phone-2.png";
import phone3 from "../images/phone/phone-3.png";
import shoes1 from "../images/shoes/shoe-1.png";
import shoes2 from "../images/shoes/shoe-2.png";

export const ProductsContext = createContext();

const ProductsContextProvider = (props) => {
  const [products] = useState([
    {
      id: 1,
      name: "Macbook",
      price: 500,
      image: laptop1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 2,
      name: "HP",
      price: 400,
      image: laptop2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 3,
      name: "HP Pro",
      price: 450,
      image: laptop3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 4,
      name: "Samsung",
      price: 300,
      image: phone1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 5,
      name: "Samsung S8",
      price: 350,
      image: phone2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 6,
      name: "Huawei",
      price: 340,
      image: phone3,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 7,
      name: "Nike",
      price: 200,
      image: shoes1,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
    {
      id: 8,
      name: "Adidas",
      price: 240,
      image: shoes2,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, ex.",
        details:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam rerum dolore quidem ad provident hic, quaerat quae commodi omnis. Delectus ipsam cum eveniet nihil cumque cupiditate numquam! Id, quas debitis?Corporis distinctio ab ducimus ipsum, esse eaque, quasi architecto porro qui odio enim nam assumenda cumque obcaecati nesciunt excepturi incidunt itaque provident quod expedita ex adipisci voluptatibus? Maxime, sit pariatur!',
    },
  ]);
  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
export default ProductsContextProvider;
