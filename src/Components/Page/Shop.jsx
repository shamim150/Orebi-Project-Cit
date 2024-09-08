import React from "react";
import Container from "../Layer/Container";
import Breadcumb from "../Layer/Breadcumb";
import { MdOutlineGridOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Paginate from "../Layer/Paginate";
import { useState } from "react";

const Shop = () => {

  let [showNuber,setShowNumber] = useState(12)
  let numberUpdate = (element)=>{
    let numberCollect = Number(element.target.value)
    setShowNumber(numberCollect)
  }

  return (
    <div>
      <Container>
        <Breadcumb />

        <div className="flex justify-between ">
          <div className="left w-[370px] bg-slate-600 py-32"></div>
          <div className="right w-[1190px] bg-slate-300 ">
            <div className="py-3 bg-orange-300 flex justify-between">
              <div className="flex  items-center gap-5">
                <div className="icon h-9 w-9 bg-Primary flex justify-center items-center">
                  <MdOutlineGridOn className="text-white" />
                </div>
                <div className="h-9 w-9 bg-white border  flex justify-center items-center">
                  <FaBars className="text-[#737373]" />
                </div>
              </div>

              <div className="text flex items-center gap-10">
                <div>
                  Sort by:
                  <select>
                    <option value="Featured">Featured1</option>
                    <option value="">Featured2</option>
                    <option value="">Featured3</option>
                    <option value="">Featured4</option>
                    <option value="">Featured5</option>
                  </select>
                </div>

                <div>
                  Show:
                  <select onChange={numberUpdate} >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                  </select>
                </div>
              </div>
            </div>

            <Paginate itemsPerPage={showNuber} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
