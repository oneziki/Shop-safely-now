import "./App.css";
import Navbar from "./components/Home/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import ProductsContextProvider from "./Global/ProductsContext";
import Cart from "./components/Home/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import CartContextProvider from "./Global/CartsContext";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import CheckOut from "./components/Home/CheckOut/CheckOut";
function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/details/:productCode/:value/:vendor/">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/checkout">
              <CheckOut></CheckOut>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </CartContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
