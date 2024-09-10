import React, { useState } from "react";
import Breadcumb from "../Layer/Breadcumb";
import Container from "../Layer/Container";
import TitleHeader from "../Layer/TitleHeader";
import { IoStar } from "react-icons/io5";
import { VscTriangleDown } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import ButtonLarge from "../Layer/ButtonLarge";
import Input from "../Layer/Input";

const ProductDetails = () => {
  let [show, setShow] = useState(false);
  let [size, setSize] = useState("S");

  let [quantity, setQuantity] = useState(1);

  let [accordiant, setAccordiant] = useState(false);

  let [shipping, setShipping] = useState(false);

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

          <div className="py-6 border-b border-t border-[#D8D8D8]">
            <ul>
              <li>
                <p
                  onClick={() => setAccordiant(!accordiant)}
                  className="py-3 px-5 cursor-pointer text-Primary font-bold font-DM text-base "
                >
                  FEATURES & DETAILS
                </p>
                <div
                  className={`bg-orange-300 transition-all duration-600  ${
                    accordiant
                      ? "h-auto p-5 overflow-auto"
                      : "h-0 p-0 overflow-hidden"
                  } `}
                >
                  <b>Lorem ipsum dolor sit amet.</b>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi labore molestias error neque velit quibusdam
                    tempore praesentium officiis veritatis alias quod, qui
                    commodi maxime nisi explicabo iusto perspiciatis quasi
                    tempora.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="py-6 border-b  border-[#D8D8D8]">
            <ul>
              <li>
                <p
                  onClick={() => setShipping(!shipping)}
                  className="py-3 px-5 cursor-pointer text-Primary font-bold font-DM text-base "
                >
                  SHIPPING & RETURNS
                </p>
                <div
                  className={`bg-orange-300 transition-all duration-600  ${
                    shipping
                      ? "h-auto p-5 overflow-auto"
                      : "h-0 p-0 overflow-hidden"
                  } `}
                >
                  <b>Lorem ipsum dolor sit amet.</b>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Excepturi labore molestias error neque velit quibusdam
                    tempore praesentium officiis veritatis alias quod, qui
                    commodi maxime nisi explicabo iusto perspiciatis quasi
                    tempora.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            tenetur alias id nisi, delectus facilis laborum! Corporis, inventore
            tempora tempore ratione at possimus! Possimus, mollitia ipsam.
            Laudantium debitis tempora ipsa omnis ducimus? Provident eveniet
            molestias iste illum, illo dolorem accusamus enim consequatur velit
            perspiciatis consectetur ipsam eos suscipit odio fuga.
          </p>
        </div>

        <div>
          <div className="review mt-24 ">
            <div className="text flex gap-16 mb-10">
              <p className="text-Secondary font-DM text-xl leading-7">
                Description
              </p>{" "}
              <span className="text-Primary font-DM text-xl font-bold ">
                Reviews (1)
              </span>
            </div>
            <p className="text-Secondary font-DM text-sm leading-7 border-b  border-[#D8D8D8] pb-4 ">
              1 review for Product
            </p>
          </div>

          <div className="flex items-center gap-9 mt-6">
            <p className="text-Primary font-DM text-base leading-7">
              {" "}
              John Ford{" "}
            </p>
            <div className="flex gap-x-1 text-[#FFD881]">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
          </div>
          <p className="mt-4 text-Secondary font-DM text-base leading-7 border-b  border-[#D8D8D8] pb-4 ">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>

          <div className="max-w-[780px] ">
            <p className="text-Primary font-DM text-xl font-bold mt-12">
              Add a Review
            </p>

            <Input 
            className='mt-12'
            labelText="Name" 
            placeholder='Name'   
            type='text'   
            id='Name'      
            />
            <Input 
            className='mt-6'
            labelText="Email" 
            placeholder='Your email here'   
            type='Email'   
            id='Email'      
            />
            <Input 
            className='mt-6 pb-20'
            labelText="Review" 
            placeholder='Your review here'   
            type='text'   
            id='Review'      
            />
          </div>
          <ButtonLarge className='mt-7 mb-32' ButtonLargeText='Post' />
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
