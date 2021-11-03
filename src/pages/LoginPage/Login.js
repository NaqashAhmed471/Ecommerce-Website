import React, { useState } from "react";
import style from "./Login.module.css";
import Form from "../../components/LoginForm/Form";
import Navbar from "../../components/Navbar/Navbar";
import { Route, Switch } from "react-router-dom";
import Home from "../Homepage/Home";
import SpecificCategory from "../SpecificCategoryPage/SpecificCategory";
import ProductDetails from "../ProductDetailPage/ProductDetails";
import AddToCart from "../AddToCartPage/AddToCart";
import { CartProvider } from "react-use-cart";

const Login = () => {
  const adminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const loginHandler = (details) => {
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not match !");
    }
  };

  const logOut = () => {
    setUser({
      name: "",
      email: "",
    });
    setError("");
  };

  return (
    <div className={style.login}>
      {user.email !== "" ? (
        <div class="welcome">
          <CartProvider>
            <Navbar logOut={logOut} />
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route
                exact
                path="/specificcategory/:name"
                component={SpecificCategory}
              />
            </Switch>
            <Switch>
              <Route
                exact
                path="/productDetails/:id"
                component={ProductDetails}
              />
            </Switch>
            <Switch>
              <Route exact path="/addToCart" component={AddToCart} />
            </Switch>
          </CartProvider>
        </div>
      ) : (
        <Form Login={loginHandler} error={error} />
      )}
    </div>
  );
};

export default Login;
