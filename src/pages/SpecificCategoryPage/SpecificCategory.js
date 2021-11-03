import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import style from "./SpecificCategory.module.css";
import ItemCard from "../../components/Card/ItemCard";

const SpecificCategory = () => {
  let { name } = useParams();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${name}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
  return (
    <section className={style.specific_category_wrapper}>
      <div className="container">
        <div className="row justify-content-center">
          {category.map((item, index) => {
            return (
              <ItemCard
                img={item.image}
                category={item.category}
                price={item.price}
                key={index}
                id={item.id}
                item={item}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecificCategory;
