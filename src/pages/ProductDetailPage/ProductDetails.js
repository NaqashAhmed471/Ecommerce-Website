import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./ProductDetails.module.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setDetail(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <section className={style.product_detail_wrapper}>
      <div className="container">
        <div className="row d-flex justify-content-center ">
          <div className={style.card}>
            <div className={`${style.card_wrapp} shadow-lg`}>
              <div className={style.img_prof}>
                <img
                  src={detail.image}
                  className="img-fluid"
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
              <div className={style.card_details}>
                <div className={style.card_details_wrap}>
                  <h5>Id :</h5>
                  <p>{detail.id}</p>
                </div>
                <div className={style.card_details_wrap}>
                  <h5>Category : </h5>
                  <p>{detail.category}</p>
                </div>
                <div className={style.card_details_wrap}>
                  <h5>Price :</h5>
                  <p>{detail.price}</p>
                </div>
                <div className={style.card_details_wrap}>
                  <h5>Title : </h5>
                  <p>{detail.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
