import React from "react";
import Container from "./Layer/Container";
import { useNavigate } from "react-router-dom";

const SaleOffer = () => {
  const navigate = useNavigate();
  return (
    <Container className="md:h-[780px] md:gap-10 gap-3 grid grid-cols-2 grid-rows-2 md:mt-28 mt-10">
      <div className=" row-span-2 ">
        <img
          onClick={() => navigate("/Product")}
          className="w-full h-full object-cover cursor-pointer"
          src="/public/SaleOffer/Ad_1.jpg"
          alt=""
        />
      </div>
      <div className=" row-span-1">
        {" "}
        <img
          className="w-full h-full object-cover cursor-pointer"
          src="/public/SaleOffer/Ad_2.jpg"
          alt=""
        />
      </div>
      <div className=" row-span-1">
        {" "}
        <img
          className="w-full h-full object-cover cursor-pointer"
          src="/public/SaleOffer/Ad_3.jpg"
          alt=""
        />
      </div>

      {/* <div className="mt-24 mb-44 flex justify-between items-center">
        <div className="left w-[780px] h-[780px] bg-black"></div>

        <div className="right w-[780px] h-[780px] flex flex-col justify-between bg-black ">
          <div className="top w-full h-[370px] bg-blue-600"></div>
          <div className="bottom w-full h-[370px] bg-blue-600"></div>
        </div>
      </div> */}
    </Container>
  );
};

export default SaleOffer;
