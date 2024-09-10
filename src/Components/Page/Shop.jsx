import React from "react";
import Container from "../Layer/Container";
import Breadcumb from "../Layer/Breadcumb";
import { MdOutlineGridOn } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import Paginate from "../Layer/Paginate";
import { useState } from "react";

const Shop = () => {

  let [showNuber,setShowNumber] = useState(12)
  let [show, setShow] = useState(true)

  let numberUpdate = (element)=>{
    let numberCollect = Number(element.target.value)
    setShowNumber(numberCollect)
  }

  return (
    <div>
      <Container>
        <Breadcumb />

        <div className="flex justify-between ">
          <div className="left w-[370px] bg-slate-300 ">
            <h2>Shop by Category</h2>
          <ul>
            <li>
              <span className="flex justify-between items-center">Category <p>X</p> </span>
              <ul className="bg-red-400">
                <li>Category 1</li>
                <li>Category 2</li>
                <li>Category 3</li>
                <li>Category 4</li>
                <li>Category 5</li>
              </ul>
            </li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>

          </div>













          <div className="right w-[1190px] ">
            <div className="py-3 b flex justify-between">


              <div className="flex  items-center gap-5">
                <div onClick={()=> setShow(true)} className="icon h-9 w-9 bg-Primary flex justify-center items-center">
                  <MdOutlineGridOn className="text-white" />
                </div>
                <div onClick={()=> setShow(false)}  className="h-9 w-9 bg-white border  flex justify-center items-center">
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
                  <select className="border" onChange={numberUpdate} >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                    <option value="64">64</option>
                  </select>
                </div>
              </div>
            </div>

            <Paginate itemsPerPage={showNuber} show={show} />


          </div>
        </div>
      </Container>
    </div>
  );
};

export default Shop;
