import React from "react";
import Container from "../Layer/Container";
import Breadcumb from "../Layer/Breadcumb";
import { MdOutlineGridOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Paginate from "../Layer/Paginate";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { IoMdArrowDropup } from "react-icons/io";

const Shop = () => {
  let [showNuber, setShowNumber] = useState(12);

  let [cat, setCat] = useState(false);

  let manageCat = () => {
    setCat(!cat);
  };

  let [cat2, setCat2] = useState(false);
  let manageCat2 = () => {
    setCat2(!cat2);
  };

  let [cat3, setCat3] = useState(false);
  let manageCat3 = () => {
    setCat3(!cat3);
  };
  let [cat4, setCat4] = useState(false);
  let manageCat4 = () => {
    setCat4(!cat4);
  };
  let [cat5, setCat5] = useState(false);
  let manageCat5 = () => {
    setCat5(!cat5);
  };

  let numberUpdate = (element) => {
    let numberCollect = Number(element.target.value);
    setShowNumber(numberCollect);
  };

  return (
    <div>
      <Container className="my-28">
        <Breadcumb />

        <div className="flex justify-between mt-28 ">
          <div className="left w-[370px]  ">
            <h2 className="font-DM text-xl font-bold text-Primary mb-3">
              Shop by Category
            </h2>
            <ul>
              <li className=" ">
                <div
                  onClick={manageCat}
                  className=" bg-white py-2 px-3 relative w-full pb-5  leading-7 text-Secondary "
                >
                  Category 1
                  <FaMinus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat ? "opacity-100" : "opacity-0 -rotate-90 "
                    }`}
                  />
                  <FaPlus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat ? "opacity-0 rotate-90" : "opacity-100 "
                    }`}
                  />
                </div>

                {cat && (
                  <ul className="bg-white leading-7 text-Secondary pb-2">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                )}
                <div className=" border-b border-[#D8D8D8] "></div>
              </li>
            </ul>

            <ul>
              <li className=" ">
                <div
                  onClick={manageCat2}
                  className=" bg-white py-2 px-3 relative w-full pb-5 leading-7 text-Secondary "
                >
                  Category 2
                  <FaMinus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat2 ? "opacity-100" : "opacity-0 -rotate-90 "
                    }`}
                  />
                  <FaPlus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat2 ? "opacity-0 rotate-90" : "opacity-100 "
                    }`}
                  />
                </div>

                {cat2 && (
                  <ul className="bg-white leading-7 text-Secondary pb-2">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                )}
                <div className=" border-b border-[#D8D8D8] "></div>
              </li>
            </ul>

            <ul>
              <li className=" ">
                <div
                  onClick={manageCat3}
                  className=" bg-white py-2 px-3 relative w-full pb-5 leading-7 text-Secondary "
                >
                  Category 3
                  <FaMinus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat3 ? "opacity-100" : "opacity-0 -rotate-90 "
                    }`}
                  />
                  <FaPlus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat3 ? "opacity-0 rotate-90" : "opacity-100 "
                    }`}
                  />
                </div>

                {cat3 && (
                  <ul className="bg-white leading-7 text-Secondary pb-2">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                )}
                <div className=" border-b border-[#D8D8D8] "></div>
              </li>
            </ul>

            <ul>
              <li className=" ">
                <div
                  onClick={manageCat4}
                  className=" bg-white py-2 px-3 relative w-full pb-5 leading-7 text-Secondary "
                >
                  Category 4
                  <FaMinus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat4 ? "opacity-100" : "opacity-0 -rotate-90 "
                    }`}
                  />
                  <FaPlus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat4 ? "opacity-0 rotate-90" : "opacity-100 "
                    }`}
                  />
                </div>

                {cat4 && (
                  <ul className="bg-white leading-7 text-Secondary pb-2">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                )}
                <div className=" border-b border-[#D8D8D8] "></div>
              </li>
            </ul>

            <ul>
              <li className=" ">
                <div
                  onClick={manageCat5}
                  className=" bg-white py-2 px-3 relative w-full pb-5 leading-7 text-Secondary "
                >
                  Category 5
                  <FaMinus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat5 ? "opacity-100" : "opacity-0 -rotate-90 "
                    }`}
                  />
                  <FaPlus
                    className={`icon absolute right-3 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      cat5 ? "opacity-0 rotate-90" : "opacity-100 "
                    }`}
                  />
                </div>

                {cat5 && (
                  <ul className="bg-white leading-7 text-Secondary pb-2">
                    <li>Category 1</li>
                    <li>Category 2</li>
                    <li>Category 3</li>
                    <li>Category 4</li>
                    <li>Category 5</li>
                  </ul>
                )}
                <div className=" border-b border-[#D8D8D8] "></div>
              </li>
            </ul>

            <h2 className="font-DM text-xl font-bold text-Primary flex justify-between items-center px-3 mt-12 mb-9">
              Shop by Color
              <span>
                <IoMdArrowDropup />
              </span>
            </h2>

            <div className="flex gap-x-2.5 items-center pb-5">
              <div className="box h-3 w-3 bg-black rounded-full ml-3"></div>
              <p className="text-Secondary leading-7 ">Color 1</p>
            </div>
            <div className=" border-b border-[#D8D8D8]"></div>

            <div className="flex gap-x-2.5 items-center  pt-5 pb-5">
              <div className="box h-3 w-3  bg-[#FF8686]  rounded-full ml-3"></div>
              <p className="text-Secondary leading-7">Color 1</p>
            </div>
            <div className=" border-b border-[#D8D8D8]"></div>
            <div className="flex gap-x-2.5 items-center  pt-5 pb-5">
              <div className="box h-3 w-3  bg-[#7ED321]  rounded-full ml-3"></div>
              <p className="text-Secondary leading-7">Color 1</p>
            </div>
            <div className=" border-b border-[#D8D8D8]"></div>
            <div className="flex gap-x-2.5 items-center  pt-5 pb-5">
              <div className="box h-3 w-3  bg-[#B6B6B6]  rounded-full ml-3"></div>
              <p className="text-Secondary leading-7">Color 1</p>
            </div>
            <div className=" border-b border-[#D8D8D8]"></div>
            <div className="flex gap-x-2.5 items-center  pt-5 pb-5">
              <div className="box h-3 w-3  bg-[#15CBA5]  rounded-full ml-3"></div>
              <p className="text-Secondary leading-7">Color 1</p>
            </div>
            <div className=" border-b border-[#D8D8D8]"></div>





            <h2 className="font-DM text-xl font-bold text-Primary flex justify-between items-center px-3 mt-12 mb-9">
            Shop by Brand
              <span>
                <IoMdArrowDropup />
              </span>
            </h2>

            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] pb-5"> Brand 1</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> Brand 2</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> Brand 3</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> Brand 4</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> Brand 5</div>




            <h2 className="font-DM text-xl font-bold text-Primary  px-3 mt-12 mb-9">
            Shop by Price
             
            </h2>

            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] pb-5">$0.00 - $9.99 </div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> $10.00 - $19.99</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> $20.00 - $29.99</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> $30.00 - $39.99</div>
            <div className="text px-3 text-Secondary leading-7  border-b border-[#D8D8D8] py-5"> $40.00 - $69.99</div>






          </div>












          <div className="right w-[1190px] ">
            <div className="py-3 b flex justify-between">
              <div className="flex  items-center gap-5">
                <div
                 
                  className="icon h-9 w-9 bg-Primary flex justify-center items-center"
                >
                  <MdOutlineGridOn className="text-white" />
                </div>
                <div
                
                  className="h-9 w-9 bg-white border  flex justify-center items-center"
                >
                  <FaBars className="text-[#737373]" />
                </div>
              </div>

              <div className="text flex items-center gap-10">
                <div>
                  Sort by:
                  <select className="border ">
                    <option value="Featured">Featured1</option>
                    <option value="">Featured2</option>
                    <option value="">Featured3</option>
                    <option value="">Featured4</option>
                    <option value="">Featured5</option>
                  </select>
                </div>

                <div>
                  Show:
                  <select className="border" onChange={numberUpdate}>
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                  </select>
                </div>
              </div>
            </div>

            <Paginate itemsPerPage={showNuber}  />



          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
