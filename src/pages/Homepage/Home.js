import React, { useEffect } from "react";
import allActions from "../../Redux";
import { useSelector, useDispatch } from "react-redux";
import SimpleSlider from "../../components/HomeSlider/Slider";
import style from "./Home.module.css";
import ItemCard from "../../components/Card/ItemCard";
import { Link } from "react-router-dom";

const Home = () => {
  const allCategories = useSelector(
    (state) => state.categoryReducer.categories
  );
  console.log(allCategories);

  const menCollection = allCategories.filter(
    (arr) => arr.category === "men's clothing"
  );
  console.log(menCollection);

  const jewellwery = allCategories.filter((arr) => arr.category === "jewelery");
  console.log(jewellwery);

  const electronics = allCategories.filter(
    (arr) => arr.category === "electronics"
  );
  console.log(electronics);

  const womenCollection = allCategories.filter(
    (arr) => arr.category === "women's clothing"
  );
  console.log(womenCollection);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.categoryActions.fetchCategories());
  }, []);

  return (
    <>
      <section className={style.hero}>
        <div className="container">
          <SimpleSlider />
        </div>
      </section>
      <section className={style.categories_wrapper}>
        <div className="container">
          <Link
            to="/specificcategory/men's clothing"
            className={style.category_name}
          >
            <h1 className="text-center my-5"> MEN'S COLLECTION</h1>{" "}
          </Link>
          <div className="row justify-content-center">
            {menCollection.slice(0, 3).map((item, index) => {
      
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
      <section className={style.categories_wrapper}>
        <div className="container">
          <Link
            to="/specificcategory/jewelery"
            className={style.category_name}
          >
            <h1 className="text-center my-5"> JEWELERY COLLECTION</h1>{" "}
          </Link>
          <div className="row justify-content-center">
            {jewellwery.slice(0, 3).map((item, index) => {
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
      <section className={style.categories_wrapper}>
        <div className="container">
          <Link
            to="/specificcategory/electronics"
            className={style.category_name}
          >
            {" "}
            <h1 className="text-center my-5"> ELECTRONICS COLLECTION</h1>{" "}
          </Link>
          <div className="row justify-content-center">
            {electronics.slice(0, 3).map((item, index) => {
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
      <section className={style.categories_wrapper}>
        <div className="container">
          <Link
            to="/specificcategory/women's clothing"
            className={style.category_name}
          >
            {" "}
            <h1 className="text-center my-5"> WOMEN'S COLLECTION</h1>{" "}
          </Link>
          <div className="row justify-content-center">
            {womenCollection.slice(0, 3).map((item, index) => {
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
    </>
  );
};

export default Home;
