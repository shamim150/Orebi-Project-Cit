import { Image } from 'antd'
import React, { useState } from 'react'
import { IoClose } from 'react-icons/io5'

const CartItem = () => {



    let [count, setCount] = useState(1);
  let [ddm, setDdm] = useState(false);
  let [size, setSize] = useState("M");

  let manageCountMinus = () => setCount(count > 1 ? count - 1 : count); /// {if (count >1 )setCount(count-1)}
  let manageCountPlus = () => setCount(count + 1);

  let manageDdm = () => {
    setDdm(!ddm);
  };
  let manageDdmValue = (e) => {
    let DDMValue = e.target.innerText;
    setSize(DDMValue);
  };



  return (
    <div>
         <div className="bottom grid grid-cols-5 py-6 px-5 border items-center border-[#F0F0F0]">
          <div className="flex items-center gap-5 ">
            <IoClose />

            <Image
              className="object-cover "
              width="100px"
              height="100px"
              src="/2_grande 5.png"
            />
            <p>Product name</p>
          </div>
          <div>Price</div>

          <div className="w-[140px] h-9 grid grid-cols-3 gap-0.5 border">
            <div
              onClick={manageCountMinus}
              className=" flex justify-center items-center cursor-pointer"
            >
              -
            </div>

            {/* function onClick={setCount(count>1 ? count-1:count)}  */}

            <div className=" flex justify-center items-center">{count}</div>
            <div
              onClick={manageCountPlus}
              className=" flex justify-center items-center cursor-pointer"
            >
              +
            </div>
          </div>
          <div onClick={manageDdm} className="w-[140px] h-9 border relative">
            <p className="text-center leading-9">{size}</p>
            <ul
              onClick={manageDdmValue}
              className={`w-full bg-slate-200 absolute left-0  transition-all duration-300 ${
                ddm
                  ? "opacity-100 top-full visible"
                  : "opacity-0 top-[200%] invisible"
              } `}
            >
              <li className="leading-9 text-center border-b  cursor-pointer">
                S
              </li>
              <li className="leading-9 text-center border-b cursor-pointer">
                M
              </li>
              <li className="leading-9 text-center border-b  cursor-pointer">
                L
              </li>
              <li className="leading-9 text-center border-b  cursor-pointer">
                XL
              </li>
              <li className="leading-9 text-center border-b  cursor-pointer">
                XXL
              </li>
            </ul>
          </div>
          <div>1</div>
        </div>
    </div>
  )
}

export default CartItem