import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";

//Pages
import About from "./pages/AboutPage";
import Cart from "./pages/CartPage";
import Contact from "./pages/ContactPage";
import Default from "./pages/Default";
import Home from "./pages/HomePage";
import Product from "./pages/ProductPage";
import SingleProduct from "./pages/SingleProductPage";

//Components
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import SideCart from "./component/SideCart";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/cart" component={Cart} />
        <Route path="/contact" component={Contact} />
        <Route path="/product" exact component={Product} />
        <Route path="/product/:id" component={SingleProduct} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
