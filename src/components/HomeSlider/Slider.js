import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./Carousel.module.css";

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2900,
      cssEase: "linear",
    };
    return (
      <div className={styles.Slider_wrapper}>
        <Slider {...settings}>
          <div className={styles.slider1}>
            <div className={styles.inner_slider}>
              <h5>500+ Worlwide Branches</h5>
              <h1>
                E-COMMERCE <span>HOME  PAGE</span>
              </h1>
              <div className={styles.btn_flex}>
                <h3>SHOP NOW</h3>
                <h3>SHOP LATER</h3>
              </div>
            </div>
          </div>
          <div className={styles.slider2}>
            <div className={styles.inner_slider}>
              <h5>500+ Worlwide Branches</h5>
              <h1>
                PRODUCTS WITH <span>BIG & SALE</span>
              </h1>
              <div className={styles.btn_flex}>
                <h3>SHOP NOW</h3>
                <h3>SHOP LATER</h3>
              </div>
            </div>
          </div>
          <div className={styles.slider3}>
            <div className={styles.inner_slider}>
              <h5>500+ Worlwide Branches</h5>
              <h1>
                Catch Your <span>Style & Look</span>
              </h1>
              <div className={styles.btn_flex}>
                <h3>SHOP NOW</h3>
                <h3>SHOP LATER</h3>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
export default SimpleSlider;
