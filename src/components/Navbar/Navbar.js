import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "react-use-cart";

const Navbar = ({ logOut }) => {
     
  const {
    totalItems,
  } = useCart();

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-4 shadow-lg ">
          <div className={style.container}>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse d-flex justify-content-between align-items-center"
              id="navbarSupportedContent"
            >
              <div className="logo">
                <Link className="navbar-brand" to="/">
                  ECOMMERCE
                </Link>
              </div>
              <div className="navbar_icons">
                <span className={`${style.cart} pe-5`}>
                  <Link to="#">
                    <ShoppingCartIcon color="success" fontSize="large" />
                    <span className={`${style.cartitems}`}>{totalItems}</span>
                  </Link>
                </span>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={logOut}
                >
                  LOGOUT
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
