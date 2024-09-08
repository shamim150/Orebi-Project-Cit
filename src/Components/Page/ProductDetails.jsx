import React, { useState } from "react";
import Breadcumb from "../Layer/Breadcumb";
import Container from "../Layer/Container";
import TitleHeader from "../Layer/TitleHeader";
import { IoStar } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import ButtonLarge from "../Layer/ButtonLarge";

const ProductDetails = () => {
  let [show, setShow] = useState(false);
  let [size, setSize] = useState("S");

  let [quantity, setQuantity] = useState(1);

  let [accordiant, setAccordiant] = useState(false);

  let manageSize = (element) => {
    setSize(element.target.value);
  };

  return (
    <div>
      <Container>
        <Breadcumb />
        <div className=" h-[1600px] grid grid-cols-2 grid-rows-2 gap-10 mt-24 mb-12 ">
          <div className="pshow bg-slate-400 ">
            <img
              className="h-full w-full object-cover"
              src="/public/ProductDetails/Image_1.jpg"
              alt=""
            />
          </div>
          <div className="pshow bg-slate-400 ">
            <img
              className="h-full w-full object-cover"
              src="/public/ProductDetails/Image_2.jpg"
              alt=""
            />
          </div>
          <div className="pshow bg-slate-400 ">
            <img
              className="h-full w-full object-cover"
              src="/public/ProductDetails/Image_3.jpg"
              alt=""
            />
          </div>
          <div className="pshow bg-slate-400 ">
            <img
              className="h-full w-full object-cover"
              src="/public/ProductDetails/Image_4.jpg"
              alt=""
            />
          </div>
        </div>

        <TitleHeader headerText="Product" />
        <div className="details max-w-[780px] mt-4">
          <div className="border-b border-[#D8D8D8] pb-6">
            <div className="reviewIcon flex items-center flex-wrap gap-1 mb-5 ">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <p>1 Review</p>
            </div>
            <p className="w-full">
              {" "}
              <del className="text-red-400 opacity-55 font-DM text-base mr-3">
                <span className="text-Primary">$88.00</span>
              </del>
              <span>
                <b className="font-DM text-xl text-Primary">$44.00</b>
              </span>
            </p>
          </div>

          <ul className="border-b border-[#D8D8D8]">
            <li className="flex items-center gap-12 my-7">
              <b>CILOR:</b>
              <div className="flex gap-3">
                <span className="w-7 h-7 bg-slate-700 rounded-full  inline-block"></span>
                <span className="w-7 h-7 bg-slate-700 rounded-full  inline-block"></span>
                <span className="w-7 h-7 bg-slate-700 rounded-full  inline-block"></span>
                <span className="w-7 h-7 bg-slate-700 rounded-full  inline-block"></span>
                <span className="w-7 h-7 bg-slate-700 rounded-full  inline-block"></span>
                <span className="w-7 h-7 bg-slate-700 rounded-full  inline-block"></span>
              </div>
            </li>

            <li className="flex items-center gap-12 my-7 ">
              <b>SIZE:</b>
              <div className="w-36 border border-red-500 py-1 px-5 relative">
                <p>{size}</p>
                <div
                  onClick={() => setShow(!show)}
                  className="absolute top-1/2 right-5 -translate-y-1/2"
                >
                  <VscTriangleDown />
                </div>
                <ul
                  onClick={manageSize}
                  className={`absolute w-full  top-full  border-r border-l border-red-400 transition-all duration-300 ${
                    show
                      ? "left-0 opacity-100 visible"
                      : "left-full opacity-0 invisible"
                  }  `}
                >
                  <input
                    value="S"
                    className="w-full border-b border-red-400 px-5 py-1 cursor-pointer"
                  />
                  <input
                    value="M"
                    className="w-full border-b border-red-400 px-5 py-1 cursor-pointer"
                  />
                  <input
                    value="L"
                    className="w-full border-b border-red-400 px-5 py-1 cursor-pointer"
                  />
                  <input
                    value="XL"
                    className="w-full border-b border-red-400 px-5 py-1 cursor-pointer"
                  />
                  <input
                    value="XXL"
                    className="w-full border-b border-red-400 px-5 py-1 cursor-pointer"
                  />
                </ul>
              </div>
            </li>

            <li className="flex items-center gap-12 my-7 ">
              <b>QUANTITY:</b>
              <div className="w-36 gap-1 border border-red-500 h-9 relative grid grid-cols-3">
                <span
                  onClick={() =>
                    setQuantity(quantity > 1 ? quantity - 1 : quantity)
                  }
                  className="flex items-center justify-center bg-zinc-100"
                >
                  <TiMinus />
                </span>
                <span className="flex items-center justify-center bg-zinc-100">
                  {quantity}
                </span>
                <span
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex items-center justify-center bg-zinc-100"
                >
                  <FaPlus />
                </span>
              </div>
            </li>

            <li className="flex items-center gap-x-12 mt-7">
              <b>STATUS:</b>{" "}
              <p className="font-DM text-base text-Secondary">In stock</p>
            </li>
          </ul>

          <div className="flex items-center gap-x-5 py-7">
            <ButtonLarge ButtonLargeText="Add to Wish List" />
            <ButtonLarge ButtonLargeText="Add to Cart" />
          </div>

          <div>
            <ul>
              <li>
                <p onClick={()=> setAccordiant(!accordiant)} className="py-3 px-5 bg-slate-200 cursor-pointer text-Primary font-bold font-DM text-base ">FEATURES & DETAILS</p>
                <div className={`bg-orange-300 transition-all duration-300  ${accordiant ? 'h-auto p-5 overflow-auto' : 'h-0 p-0 overflow-hidden' } `}>
                  <b>Lorem ipsum dolor sit amet.</b>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi labore molestias error neque velit quibusdam
                    tempore praesentium officiis veritatis alias quod, qui
                    commodi maxime nisi explicabo iusto perspiciatis quasi
                    tempora.
                    lorem500
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum tenetur alias id nisi, delectus facilis laborum! Corporis, inventore tempora tempore ratione at possimus! Possimus, mollitia ipsam. Laudantium debitis tempora ipsa omnis ducimus? Provident eveniet molestias iste illum, illo dolorem accusamus enim consequatur velit perspiciatis consectetur ipsam eos suscipit odio fuga.
            lorem500
          </p>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
