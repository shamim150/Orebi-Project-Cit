import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdHeart } from "react-icons/io";
import { LuRefreshCcw } from "react-icons/lu";

const Li = ({ Name, iconName }) => {
  return (
    <div>
      <li className="flex justify-end items-center gap-4 font-DM transition-all duration-300 text-Secondary hover:text-Primary text-[16px] font-bold">
        {Name}
        {iconName}
      </li>
    </div>
  );
};

const VerticalProductItem = ({offer,pName,price,brand,src,alt,className}) => {
  return (
      <div className={`grid grid-cols-6 h-52 gap-3  ${className}`}>
        <div className="image col-span-1 relative">
          <img className="w-full h-52" src={src} alt={alt} />

          

          {offer && (
            <button className="absolute top-2 left-2 bg-Primary font-DM font-bold text-sm text-white py-1 w-[92px]">
              {offer}
            </button>
          )}
        </div>



        <div className="text bg-white col-span-4 flex flex-col p-4 justify-between ">
          <div className="flex justify-between items-center">
            <p className="font-bold font-DM text-Primary text-[20px]">
              {pName}
            </p>
            <span className="font-DM text-Secondary text-[16px] leading-7">
              ${price}
            </span>
          </div>
          <div className="description">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis facilis ratione commodi ut eius voluptate ab animi molestias consequuntur aperiam dolores assumenda nemo quisquam tenetur, repellat exercitationem nisi provident recusandae pariatur, .</p>
          </div>
          <p className="font-DM text-Secondary text-[16px] leading-7 mt-4">
            {brand}
          </p>
        </div>


          <div className="overlay   bg-white w-full py-6 px-7 col-span-1 flex items-center justify-end ">
            <ul className="flex flex-col gap-4">
              <Li
                Name=" Wish List"
                iconName={<IoMdHeart className="text-Primary" />}
              />
              <Li
                Name="Compare"
                iconName={<LuRefreshCcw className="text-Primary" />}
              />
              <Li
                Name="Add to Cart"
                iconName={<FaShoppingCart className="text-Primary" />}
              />
            </ul>
          </div>
      </div>
  );
};

export default VerticalProductItem;
