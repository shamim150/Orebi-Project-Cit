import React from "react";
import Container from "./Layer/Container";
import TitleHeader from "./Layer/TitleHeader";
import ProductsItem from "./Layer/ProductsItem";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Arrivals = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute top-1/2 right-5 h-16 w-16 -translate-y-1/2 rounded-full bg-[#979797] flex items-center justify-center '
        style={{ ...style, display: "flex", }}
        onClick={onClick}
      >
       <div>
       <FaAngleRight />
       </div>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className='absolute top-1/2 left-5 h-16 w-16 -translate-y-1/2 rounded-full bg-[#979797] flex items-center justify-center z-10 '
        style={{ ...style, display: "flex" }}
        onClick={onClick}
      >
       <div>
       <FaAngleLeft />
       </div>
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Container className="mt-24">
        <TitleHeader className='mb-12' headerText="New Arrivals" />
      </Container>

      <Container className='max-w-[1960px]' >
        <div>
          <Slider {...settings}>
            <ProductsItem
              className="w-full px-5"
              pName="Basic Crew Neck Tee"
              price="66"
              brand="Black"
              offer="90%"
              src="/Products/Image_1.png"
            />
            <ProductsItem
              className="w-full px-5"
              pName="Basic Crew Neck Tee"
              price="66"
              brand="Black"
              offer="90%"
              src="/Products/Image_2.png"
            />
            <ProductsItem
              className="w-full px-5"
              pName="Basic Crew Neck Tee"
              price="66"
              brand="Black"
              offer="90%"
              src="/Products/Image_3.png"
            />
            <ProductsItem
              className="w-full px-5"
              pName="Basic Crew Neck Tee"
              price="66"
              brand="Black"
              offer="90%"
              src="/Products/Image_4.png"
            />
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Arrivals;
