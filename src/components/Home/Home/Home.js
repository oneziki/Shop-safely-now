import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Global/CartsContext";
import { ProductsContext } from "../../../Global/ProductsContext";
import Banner from "../Banner/Banner";
import currencyFormatter from "currency-formatter";
import "./Home.css";
const Home = () => {
  const { products } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  //console.log(products);
  //console.log('data variable',data)
  return (
    <>
      <Banner></Banner>

      <div className="row justify-content-center">
        {products.map((product) => (
          <div
            className="col-md-4 d-flex justify-content-center"
            key={product.id}
          >
            <div>
              <Card
                className=" effect "
                style={{ width: "20vw", border: "none" }}
              >
                <div>
                  <Link
                    to={`/foodDetails/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img variant="top" src={product.image} />
                  </Link>
                  <Card.Body className="text-center text-dark">
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>
                      {product.description}
                      <br />
                      <strong>{currencyFormatter.format(product.price, {
                          code: "USD",
                        })}</strong>
                    </Card.Text>
                    <Button
                      className="cart-button"
                      onClick={() =>
                        dispatch({
                          type: "ADD_TO_CART",
                          id: product.id,
                          products: products,
                        })
                      }
                    >
                      Add to Cart
                    </Button>
                  </Card.Body>
                </div>
              </Card>
              <br />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
