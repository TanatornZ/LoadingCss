import React, { useRef } from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import { home } from "../../Json/home";
import { Element } from "react-scroll";
type Props = {};

function Home({}: Props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    //add class to dots
    dotsClass: "button__bar",
    arrows: false,
  };

  return (
    <Element name="home" className="overflow-hidden">
      <div className="px-5 head">
        <Slider {...settings}>
          {home.map((item) => (
            <Slide key={item.id} data={item} />
          ))}
        </Slider>
      </div>
    </Element>
  );
}

export default Home;
