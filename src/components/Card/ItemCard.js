import React from "react";
import style from "./ItemCard.module.css";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

const ItemCard = ({ img, category, price, id, item }) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-4 mx-0 mb-4">
      <div className="card pb-3 overflow-hidden h-100 shadow">
        <img src={img} className={`${style.cardimgs}`} alt="imgs" />
        <div className="card-body text-center">
          <h5 className="card-title">$ {price}</h5>
          <p className="card-text">{category}</p>
          <Link to={`/productDetails/${id}`} className="btn btn-success me-2">
            More Details
          </Link>
          <Link
            to="/addToCart"
            onClick={() => addItem(item)}
            className="btn btn-danger"
          >
            ADD TO CART
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
