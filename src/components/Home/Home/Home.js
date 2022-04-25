import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../../../Global/CartsContext";
import { ProductsContext } from "../../../Global/ProductsContext";
import currencyFormatter from "currency-formatter";
import "./Home.css";
import Footer from "../Footer/Footer";
const Home = () => {
  const { result } = useContext(ProductsContext);
  const { dispatch } = useContext(CartContext);

  console.log();
  //console.log('data variable',data)
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="row justify-content-center">
        {(result?.result || []).map((item) => (
          <div
            className="col-md-4 d-flex justify-content-center"
            key={item.productCode}
          >
            <div>
              <Card
                className=" effect "
                style={{ width: "20vw", border: "none" }}
              >
                <div>
                  <Link
                    to={`/details/${item.productCode}/${item.value}/${item.vendor}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Card.Img variant="top" src={"image"} />
                  
                  <Card.Body className="text-center text-dark">
                    <Card.Title>{item.vendor}</Card.Title>
                    <Card.Text>
                      {item.description}
                      <br />
                      <strong>
                        {currencyFormatter.format(item.value, {
                          code: "USD",
                        })}
                      </strong>
                    </Card.Text>
                    {/* <div className="row">
                    <div className="col-6">

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
                    </div>
                    <div className="col-6">
                     <Link to={`/details/${product.id}`}
                    style={{ textDecoration: "none" }}>
                     <Button className="btn btn-success">View Details</Button>
                     </Link>
                    </div>
                  </div> */}
                  </Card.Body>
                  </Link>
                </div>
              </Card>
              <br />
            </div>
          </div>
        ))}
      </div>

      {/* <Footer></Footer> */}
    </>
  );
};

export default Home;
